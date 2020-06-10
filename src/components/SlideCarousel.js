import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import ImageButtonNavigation from './ImageButtonNavigation';

export const SlideCarousel = (props) => {

  const { title, imageSource } = props;

  return (
    <View style={styles.slide}>
        <ImageButtonNavigation 
            styleSheet= {styles.imageStyle}
            imageSource= {props.imageSource}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    slide: {
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      flexBasis: '100%',
      flex: 1,
      maxWidth: widthPercentageToDP('23%'),
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: 200,
    },
    slideText: {
      width: widthPercentageToDP('100%'),
      textAlign: 'left',
      fontSize: 20,
    },
    imageStyle:{
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%')
    }
});

export default SlideCarousel;