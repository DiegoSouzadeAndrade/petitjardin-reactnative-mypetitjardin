import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const TextButtonsNavigation = ( props ) => {
    return (
        <TouchableOpacity onPress={()=> console.log(props.buttonTitle + ' Clicked')/*navigation.navigate('')*/}>
            <Text style={props.styleSheet}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    )};

    const styles = StyleSheet.create ({});

    export default withNavigation(TextButtonsNavigation);