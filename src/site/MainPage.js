import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import TextButtonsNavigation from '../components/TextButtonsNavigation';
import ImageButtonsNavigation from '../components/ImageButtonNavigation';
import Carousel from '../components/Carousel';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const MainPage = ( { navigation } ) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.mainHeaderStyle}>
                <ImageButtonsNavigation
                    styleSheet= {styles.imageStyle}
                    imageSource= {require('../../assets/logoPetitJardin.png')}
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle}
                    buttonTitle= "olá"
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle}
                    buttonTitle= "loja online"
                />
                <TextButtonsNavigation 
                    styleSheet= {styles.titleStyle}
                    buttonTitle= "quem somos"
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle} 
                    buttonTitle= "contato"
                />
                <TextButtonsNavigation 
                    styleSheet= {styles.titleStyle}
                    buttonTitle= "@ton.petit.jardin"
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle} 
                    buttonTitle= "more"
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle} 
                    buttonTitle= "BAG"
                />
                <TextButtonsNavigation
                    styleSheet= {styles.titleStyle} 
                    buttonTitle= "Log in"
                />
            </View>
            <View>
                <Carousel
                    style='slides'
                    itemsPerInterval={1}
                    items={[{
                        title: 'Foto A',
                        imageSource: require('../../assets/Boris&Caixa.jpeg'),
                      }, {
                        title: 'Foto B',
                        imageSource: require('../../assets/Boris&Fabi.jpeg'),
                      }, {
                        title: 'Foto C',
                        imageSource: require('../../assets/BorisGuardiao.jpeg'),
                      }]}
                />
            </View>
            <Text>Main Page</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%'),
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'//,
        //borderWidth: 4,
        //borderColor: 'green'
        },
    mainHeaderStyle: {
        width: widthPercentageToDP('70%'),
        height: heightPercentageToDP('5%'),
        //borderWidth: 2,
        //borderColor: 'orange',
        flexDirection: 'row'
        },
    titleStyle: {
        fontSize: 13,
        opacity: 0.3,
        marginTop: 11,
        marginRight: 80//,
        //borderWidth: 2,
        //borderColor: 'green'
        },        
    imageStyle: {
        width: 350,
        height: 50//,
        //borderWidth: 2,
        //borderColor: 'purple'
        }
});

export default MainPage;