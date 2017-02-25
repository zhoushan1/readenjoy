/**
 * Created by zhoushan on 2017/2/25.
 */
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

import utils from '../common/utils';
import * as urls from '../common/common_url';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage1 from './HomePage1';
import LoginPage1 from './LoginPage1';
import DetailPage from './DetailPage';


var NativeModule = NativeModules.CLRNBrigeManager;
var QRCodeEvent = new NativeEventEmitter(NativeModules.CLEventEmitter);

var result_val='9787121271649';

export default class Sweep extends Component {

    componentDidMount() {
        console.log("componentDidMount")
        this.QRCodeCallBack = QRCodeEvent.addListener('QRCodeCallBack', this._identifyQRCodeResult.bind(this));
    }

    componentWillUnmount() {
        this.QRCodeCallBack.remove();
    }
    //扫码后的相机回调
    _identifyQRCodeResult(result) {

       // console.log("_identifyQRCodeResult");
        //console.log(result);

    }

    _onPress() {
        let obj;
        // if (NativeModule) {
        //     NativeModule.openCameraToIdentifyQRCode();
        // }
        //需要写在相机回调里面
        //扫码获取图书信息
        let url=urls.bookScan;
        let data={
            bookNo:result_val
        };

        utils.ajax_post(url,data,(result)=>{
            //console.log(result);
           obj=utils.handleData(result);
          // console.log(obj);

        },(err)=>{
            alert(err)
        });

        //图书分享
        var url1=urls.bookShare;
        var data1={
            bookNo:'9787111128069',
            bookId:'58aab2b8e75d13383c07bf27',
            userId:'58ac22ffe75d132d403af45f'
        };
        // utils.ajax_post(url1,data1,(result)=>{
        //     console.log(result);
        //
        // },(err)=>{
        //     console.log(err)
        //     alert(err)
        // });

        //借图书
        var url2=urls.bookBorrow;
        var data2={
            bookNo:'9787111128069',
            bookId:'58aab2b8e75d13383c07bf27',
            userId:'58aad30ae75d133dd4100b83',
            relationId:'58ac2869e75d13339c0cc34a'
        }
        // utils.ajax_post(url2,data2,(result)=>{
        //     //console.log(result);
        //     //obj=utils.handleData(result);
        //     console.log(result);
        //
        // },(err)=>{
        //     alert(err)
        // });

        //图书归还
        var url3=urls.bookBack;
        var data3={
            bookNo:'9787111128069',
            bookId:'58aab2b8e75d13383c07bf27',
            userId:'58aad30ae75d133dd4100b83',
            relationId:'58ac2869e75d13339c0cc34a'
        };
        //
        // utils.ajax_post(url,data,(result)=>{
        //     //console.log(result);
        //     //obj=utils.handleData(result);
        //     console.log(result);
        // },(err)=>{
        //     console.log(err)
        //     alert(err)
        // });

        //获取图书列表--200
        var url4=urls.bookSearch;
        var data4={
            title:'设计',
            page:'1',
            size:'20'
        }

        utils.ajax_post(url4,data4,(result)=>{
            //console.log(result);
            //obj=utils.handleData(result);
            console.log(result);
        },(err)=>{
            console.log(err)
            alert(err)
        });



    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this._onPress.bind(this)} style={styles.btn}>
                    <Text style={{color: 'red'}}>
                        开启扫码相机
                    </Text>
                </TouchableOpacity>

            </View>
        );
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







