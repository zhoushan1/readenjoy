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
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage1 from './HomePage1';
import LoginPage1 from './LoginPage1';
import DetailPage from './DetailPage';
import Sweep from './Sweep';


var NativeModule = NativeModules.CLRNBrigeManager;
var QRCodeEvent = new NativeEventEmitter(NativeModules.CLEventEmitter);

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
              bookName: [123,456]
         }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.QRCodeCallBack = QRCodeEvent.addListener('QRCodeCallBack', this._identifyQRCodeResult.bind(this));
    }

    componentWillUnmount() {
        this.QRCodeCallBack.remove();
    }
    //扫码后的相机回调
    _identifyQRCodeResult(result) {

        console.log("_identifyQRCodeResult");
        console.log(result);

    }

    _onPress() {
        if (NativeModule) {
            NativeModule.openCameraToIdentifyQRCode();
        }
    }

    render() {

        let datas=this.state.bookName;
        return (
            <View style={styles.container}>


                {datas.map((data)=>{
                    return (
                        <TouchableOpacity onPress={this.jump.bind(this)} style={styles.btn} bookName={data} ref="aaa">
                            <Text style={{color: 'red'}}>
                                跳到详情页{data}
                            </Text>
                        </TouchableOpacity>
                    )
                })

                }



            </View>
        );
    }

    jump() {
        InteractionManager.runAfterInteractions(() => {
            const {navigator}=this.props;
            const book=this.refs.aaa.props.bookName;
            if (navigator) {
                navigator.push(
                    {
                        name: 'DetailPage',
                        component: DetailPage,
                        params: {
                            bookName: book,
                            //回调!从SecondPageComponent获取user
                            getUser: function(user) {
                                // _this.setState({
                                //     user: user
                                // })
                            }
                        }

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






