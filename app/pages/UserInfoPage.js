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
  TouchableOpacity,
  Navigator,
  ListView,
  MySceneComponent
} from 'react-native';
//获取屏幕信息
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class UserInfoPage extends Component {
    listChange(type){
      Alert.alert('当期选择'+type);
    }
    onButtonPress(){
      Alert.alert('Button has been pressed!');
    }
    userCenter(){
      Alert.alert('没想到你会翻我的牌！');
    }
  render() {
    return (
      <Image source={require('../img/bg.png')} style={styles.backgroundImage} >
        <View style={styles.top}>
            <TouchableOpacity onPress={this.userCenter.bind(this)}>
                <Image source={require('../img/back.png')} style={styles.back}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.top2}>
            <Image source={require('../img/header.png')} style={styles.header}></Image>
            <Text style={styles.buttonText}>阳小良</Text>
            <Text style={styles.buttonText}>海淀</Text>
        </View>
        <View style={styles.center}>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    width:null,
    width:null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    //resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor:'rgba(0,0,0,0)',
  },
  container: {
    flex: 1
  },
  buttonBooks: {
    flex: 1,
    width:width/3,
    textAlign:"center",
    color: 'white',
    marginTop:20,
  },
  buttonList: {
    flex: 1,
    width:width/2,
    textAlign:"center",
    color: 'white',
    marginTop:20,
  },
  top: {
    paddingTop:2,
    flexDirection:"row",
    height:50,
  },
  top2: {
    paddingTop:2,
    height:height/8+height/8+height/8,
    alignItems:'center',
    justifyContent:'center',
  },
  center: {
    height:height-200,
    backgroundColor:"#FFFFFF"
  },
  bottom: {
    height:50,
    backgroundColor:"#FFFFFF"
  },
  back: {
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8,
    paddingTop:5,
    marginTop:13,
    width:40,
    height:26,
    resizeMode:Image.resizeMode.contain,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  header:{
    width:120,
    height:200,
    resizeMode:Image.resizeMode.contain
  },
});
