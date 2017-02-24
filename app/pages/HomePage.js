/**
 * Created by zhoushan on 2017/2/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
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
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage1 from './HomePage1';


var NativeModule = NativeModules.CLRNBrigeManager;
var QRCodeEvent = new NativeEventEmitter(NativeModules.CLEventEmitter);

export default class HomePage extends Component {

    componentDidMount() {
        console.log("componentDidMount")
        this.QRCodeCallBack = QRCodeEvent.addListener('QRCodeCallBack', this._identifyQRCodeResult.bind(this));
    }

    componentWillUnmount() {
        this.QRCodeCallBack.remove();
    }
    //扫码后的相机回调
    _identifyQRCodeResult(result) {

        console.log("_identifyQRCodeResult")
        console.log(result)
    }

    _onPress() {
        if (NativeModule) {
            NativeModule.openCameraToIdentifyQRCode();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev ccccccccccc!!!!!
                </Text>
                <TouchableOpacity onPress={this._onPress.bind(this)} style={styles.btn}>
                    <Text style={{color: 'red'}}>
                        开启扫码相机
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.jump.bind(this)} style={styles.btn}>
                    <Text style={{color: 'red'}}>
                        页面跳转
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    jump() {
        InteractionManager.runAfterInteractions(() => {
            const {navigator}=this.props;
            if (navigator) {
                navigator.push(
                    {
                        name: 'HomePage1',
                        component: HomePage1
                    }
                )
            }
        });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',

    },
    btn:{
        marginBottom: 6
    }
});






