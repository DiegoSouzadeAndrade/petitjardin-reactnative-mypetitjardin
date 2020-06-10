import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import SlideCarousel from './SlideCarousel';
import StatCarousel from './StatCarousel';


const Carousel = ( props ) => {

    const { items, style } = props;
    const itemsPerInterval = props.itemsPerInterval === undefined
      ? 1
      : props.itemsPerInterval;
  
    const [interval, setInterval] = React.useState(1);
    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);
  
    const init = ( width ) => {
      console.log(width);
      // initialise width
      setWidth(width);
      // initialise total intervals
      const totalItems = items.length;
      setIntervals(Math.ceil(totalItems / itemsPerInterval));
    }

    const getInterval = ( offset ) => {
        for (let i = 1; i <= intervals; i++) {
          if (offset < (width / intervals) * i) {
            return i;
          }
          if (i == intervals) {
            return i;
          }
        }
    }
    
    let bullets = [];
        for (let i = 1; i <= intervals; i++) {
            bullets.push(
                <Text
                    key={i}
                    style={{
                    //TODO: Mudar para mandar uma stylesSheet
                    ...styles.bullet,
              opacity: interval === i ? 0.5 : 0.1
            }}
          >
            &bull;
          </Text>
        );
    }
    
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{...styles.scrollView, width: `${100 * intervals}%` }}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h)=> init(w)}
                onScroll={data => {
                    setWidth(data.nativeEvent.contentSize.width);
                    setIntervals(getInterval(data.nativeEvent.contentOffset.x));
                }}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
              {items.map((item, index) => {
                switch (style) {
                  case 'stats':
                    return (
                      <StatCarousel
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    );
                  default:
                    return (
                      <SlideCarousel
                        key={index}
                        title={item.title}
                        imageSource={item.imageSource}
                      />
                  );
                }
              })}
          </ScrollView>
          <View style={styles.bullets}>
            {bullets}
          </View>
        </View>
    )};

    const styles = StyleSheet.create ({
        statsHead: {
            paddingTop: 10,
            paddingHorizontal: 12,
          },
          container: {
            width: '100%',
            backgroundColor: '#fbfbfb',
            borderColor: '#ebebeb',
            borderWidth: 1,
            borderRadius: 8,
            shadowColor: '#fcfcfc',
            shadowOpacity: 1,
            marginTop: 10,
            shadowOffset: {
              width: 0,
              height: 5
            },
          },
          scrollView: {
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          },
          bullets: {
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingTop: 5,
          },
          bullet: {
            paddingHorizontal: 5,
            fontSize: 20,
          }
    });

    export default withNavigation(Carousel);