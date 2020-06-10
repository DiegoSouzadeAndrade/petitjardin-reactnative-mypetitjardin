import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';
import IndexScreen from './src/app/IndexScreen';
import MainPage from './src/site/MainPage';

const createApp = Platform.select({
  web: config => createBrowserApp(config, { history: 'hash' }),
  default: config => createAppContainer(navigator),
});

const navigator = createStackNavigator({
  Index: IndexScreen,
  Web: MainPage
}, {
  initialRouteName: 'Web',
  defaultNavigationOptions: {
    title: 'Main'
  }
});

export default createApp(
  createSwitchNavigator({
    // You could add another route here for authentication
    // Read more at reactnavigation.org
    Main: MainPage,
  }),
);