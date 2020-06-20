import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window')
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
let flatList


function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    // Resetar timer quando usuário mudar a imagem manualmente
    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}


const Carousel = ({ data }) => {
    flatListRef = useRef(null);
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)
    console.log(useRef(null))
    //flatList = flatListRef


    useEffect(()=> {
        setDataList(data)
        infiniteScroll(dataList)
    },[flatListRef])


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    ref={ref => {console.log(ref); flatListRef = ref}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />
                
                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <AnimatedTouchable 
                              key={i}
                              onPress={()=> console.log(i + 'Clicked')} 
                              style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                              >
                            </AnimatedTouchable>
                        )
                    })}
                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel