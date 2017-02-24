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
} from 'react-native';
import SearchHeader from '../components/SearchHeader';


export default class HomePage1 extends Component {
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