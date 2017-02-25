/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';
//获取屏幕信息
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class readenjoy extends Component {
    onButtonPress(){
        Alert.alert('Button has been pressed!');
    }
    render() {
        return (
            <Image source={require('../img/bg.png')} style={styles.backgroundImage} >
                <Image source={require('../img/logo.png')} style={styles.logo}></Image>
                <TextInput style={styles.textInputStyle}
                           placeholder='手机号' placeholderTextColor="#CDC5BF"
                           numberOfLines={1}
                           underlineColorAndroid={'transparent'}
                           textAlign='center'
                />
                <TextInput style={styles.textInputStyle}
                           placeholder='密码' placeholderTextColor="#CDC5BF"
                           numberOfLines={1}
                           underlineColorAndroid={'transparent'}
                           textAlign='center'
                           secureTextEntry={true}
                />
                <TouchableOpacity onPress={this.onButtonPress.bind(this)}
                                  title="登录" style={styles.loginButton}>
                    <Text style={styles.buttonText}>登录</Text>
                </TouchableOpacity>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        width:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },
    loginButton:{
        height: 48,
        width: 300,
        borderRadius: 24,
        backgroundColor: '#4695FF',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    textInputStyle: {
        width: width-30,
        height: 50,
        paddingLeft: 8,
        backgroundColor: '#00000000',
        color:"#CDC5BF",
        // alignSelf: 'center',
        //根据不同平台进行适配
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },
    logo:{
        width:120,
        height:200,
        resizeMode:Image.resizeMode.contain
    }
});


