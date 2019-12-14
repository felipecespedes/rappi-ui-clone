import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, Dimensions } from 'react-native';
import Home from '../Home/Home';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerMenu from '../DrawerMenu/DrawerMenu';

const TabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => {
        return {
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: '#ff5c49',
            }} />
          ),
        };
      },
    },
    Liked: {
      screen: Home,
      navigationOptions: () => {
        return {
          title: 'Liked',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: '#ff5c49',
            }} />
          ),
        };
      },
    },
    Search: {
      screen: Home,
      navigationOptions: () => {
        return {
          title: 'Search',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: '#ff5c49',
            }} />
          ),
        };
      },
    },
    Support: {
      screen: Home,
      navigationOptions: () => {
        return {
          title: 'Support',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: '#ff5c49',
            }} />
          ),
        };
      },
    },
    Bonus: {
      screen: Home,
      navigationOptions: () => {
        return {
          title: 'Bonus',
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: '#ff5c49',
            }} />
          ),
        };
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeBackgroundColor: '#eee',
    },
  },
);

const DashboardNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: TabsNavigator,
    },
  },
  {
    headerMode: 'none',
    drawerWidth: Dimensions.get('window').width - 50,
    contentComponent: props => <DrawerMenu />,
  },
);

const AppNavigator = createSwitchNavigator({
  Dashboard: {
    screen: DashboardNavigator,
  },
});

export default createAppContainer(AppNavigator);
