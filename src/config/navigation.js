import React from "react";
import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import {
  LocationScreen,
  AboutScreen,
  SpeakersScreen,
  ScheduleScreen,
  OverviewScreen
} from "../screens";
import { Header } from "../components";
import config from "../config";

export default StackNavigator({
  main: {
    screen: TabNavigator(
      {
        Overview: {
          name: "Overview",
          screen: OverviewScreen
        },
        Message: {
          name: "About",
          screen: AboutScreen
        },
        Schedule: {
          name: "Schedule",
          screen: ScheduleScreen
        },
        Speakers: {
          name: "Speakers",
          screen: SpeakersScreen
        },
        Map: {
          name: "Map",
          screen: LocationScreen
        }
      },
      {
        initialRouteName: "Schedule",
        navigationOptions: ({ navigation }) => ({
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: config.PRIMARY_BG_COLOR,
            borderBottomColor: config.PRIMARY_BG_COLOR,
            borderBottomWidth: 5
          },
          headerTintColor: config.PRIMARY_TEXT_COLOR,
          headerTitleStyle: {
            fontWeight: "bold"
          },
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === "Schedule") {
              iconName = "calendar";
            } else if (routeName === "Speakers") {
              iconName = "users";
            } else if (routeName === "Map") {
              iconName = "map";
            } else if (routeName === "Message") {
              iconName = "mail";
            } else if (routeName === "Overview") {
              iconName = "home";
            }
            return <Icon name={iconName} size={25} color={tintColor} />;
          }
        }),
        tabBarOptions: {
          activeTintColor: config.SECONDARY_BG_COLOR,
          inactiveTintColor: config.PRIMARY_TEXT_COLOR,
          activeBackgroundColor: config.PRIMARY_BG_COLOR,
          inactiveBackgroundColor: config.PRIMARY_BG_COLOR
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        animationEnabled: false,
        swipeEnabled: false
      }
    ),
    navigationOptions: { headerTitle: <Header /> }
  }
});

// TODO : we will add the map but it causing the error possibly th google service jason file
