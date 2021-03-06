import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; 

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigator = createMaterialTopTabNavigator(
    {
        Home: { screen: HomeTab },
        Search: { screen: SearchTab },
        AddMedia: { screen: AddMediaTab },
        Likes: { screen: LikesTab },
        Profile: { screen: ProfileTab }
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
              ...Platform.select({
                ios:{
                  backgroundColor:'white',
                }
              })
            },
            iconStyle: { height: 100 },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            upperCaseLabel: false,
            showLabel: false,
            showIcon: true,
        }
    }
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
        title: 'Donggov',
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    }

    render() {
        return (
            <AppTabContainet/>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});