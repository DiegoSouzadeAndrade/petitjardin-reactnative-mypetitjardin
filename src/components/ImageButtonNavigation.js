import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const ImageButtonsNavigation = ( props ) => {
    return (
        <TouchableOpacity onPress={()=> console.log(props.imageSource + ' Clicked')/*navigation.navigate('')*/}>
            <Image 
                style={props.styleSheet}
                source={props.imageSource}
            />
        </TouchableOpacity>
    )};

    const styles = StyleSheet.create ({});

    export default withNavigation(ImageButtonsNavigation);