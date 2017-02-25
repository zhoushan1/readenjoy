/**
 * Created by zhoushan on 2017/2/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    InteractionManager,
    NativeEventEmitter,
    NativeModules,
    Navigator,
    ScrollView,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';
import SearchHeader from '../components/SearchHeader';

import Feed from './LoginPage';
import Profile from './RegisterPage';
import { Icon } from 'react-native-elements'
const list = [
    {
        title: 'Appointments',
        icon: 'av-timer'
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff'
    }
]

export default class HomePage1 extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }


    render(){


        return (
            <View>
                <SearchHeader/>




            </View>
        )
    }
}