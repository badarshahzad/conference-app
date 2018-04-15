import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AboutScreen }  from '../screens';
import config from '../config';

export default StackNavigator(
  {
    About: {
      screen: AboutScreen,
    }
  },
  {
    initialRouteName: 'About',
    navigationOptions: {
      title: 'Conference App',
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: config.PRIMARY_BG_COLOR,
        borderBottomColor: config.PRIMARY_BG_COLOR,
        borderBottomWidth: 5
      },
      headerTintColor: config.PRIMARY_TEXT_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);