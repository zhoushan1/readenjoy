
import React, {Component} from 'react';
import Toast from 'react-native-root-toast';
//import md5 from 'react-native-md5';
//import Dimensions from 'react-dimensions';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    InteractionManager,
    AppRegistry,
    Navigator,
    ScrollView,
} from 'react-native';
import Util from '../common/utils';
import RegisterPage from './RegisterPage';



//调用原生模块
//var UserLoginMessages = NativeModules.CLReactNativeBrigeManager;


export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',

        };
    }

    componentDidMount() {
        // UserLoginMessages.getUserLoginMessage((error, events) => {
        //     //saveUserLoginMessage
        //     //getUserLoginMessage
        //     if(error) {
        //         alert(error);
        //     }else {
        //         alert(events);
        //         console.log(events);
        //     }
        // });

    }

    componentWillUpdate() {

    }


    render() {
        return (

            <ScrollView style={styles.container}>
                {/*<Image style={styles.imgStyle} source={require('../img/bg2.png')}/>*/}
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../img/phoneicon.png')}
                           style={{width: 25, height: 25, resizeMode: 'contain'}}/>
                    <TextInput placeholder='手机号' style={styles.loginInput} keyboardType='numeric'
                               onChangeText={this.onChangeMobile.bind(this)}/>
                </View>

                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../img/passicon.png')}
                           style={{width: 25, height: 25, resizeMode: 'contain'}}/>
                    <TextInput placeholder='密码' style={styles.loginInput}
                               onChangeText={this.onChangePassword.bind(this)}
                               secureTextEntry={true}
                    />

                </View>
                <View style={styles.registerWrap}>
                    <TouchableOpacity style={{alignItems: 'flex-end', flex: 1}}
                                      onPress={this.forgetPassword.bind(this)}>
                        <Text style={{color: '#7e7f83'}}>
                            忘记密码?
                        </Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={this._login.bind(this)}>
                    <Text style={{color: '#ffffff'}}>
                        登录
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerNew} onPress={this._register.bind(this)}>
                    <Text style={{color: '#565658'}}>
                        创建新账号
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }

    forgetPassword() {
        // InteractionManager.runAfterInteractions(() => {
        //     const {navigator}=this.props;
        //     if (navigator) {
        //         navigator.push(
        //             {
        //                 name: 'ForgetPassword',
        //                 component: ForgetPassword
        //             }
        //         )
        //     }
        // });

    }

    _register() {
        InteractionManager.runAfterInteractions(() => {
            const {navigator}=this.props;
            if (navigator) {
                navigator.push(
                    {
                        name: 'RegisterPage',
                        component: RegisterPage
                    }
                )
            }
        });



    }

    onChangeMobile(text) {
        this.state.mobile = text;

    }

    onChangePassword(text) {
        this.state.password = text;
    }

    _login() {
        let {mobile, password}=this.state;
        const {navigator}=this.props;

        if (!mobile.length) {
            Toast.show('请输入正确的手机号', {position: Toast.positions.CENTER});
            return;
        }

        if (Util.testPhone(mobile)) {
            Toast.show('请输入正确的手机号', {position: Toast.positions.CENTER});
            return;
        }

        if (!password.length) {
            Toast.show('请输入密码', {position: Toast.positions.CENTER});
            return;
        }


        //登录请求
        // let url = urls.urlUserLogin;
        // let data = {
        //     phoneNumber: this.state.mobile,
        //     password: Util.MD5(this.state.password),
        //     source: this.state.source,
        //     ai: this.state.ai,
        //     si: this.state.si,
        //     di: this.state.di,
        //     cv: this.state.cv,
        //     os: this.state.os,
        //     ov: this.state.ov,
        //     nt: this.state.nt,
        //     fm: this.state.fm,
        //     cb: this.state.cb,
        //     vn: this.state.vn,
        //     sc: this.state.sc,
        //     ch: this.state.ch,
        //     pn: this.state.pn,
        //     im: this.state.im,
        //     pt: this.state.pt,
        //     ge: this.state.ge,
        //     uid: this.state.uid,
        //     ts: this.state.ts,
        //     tk: this.state.tk,
        //     sg: this.state.sg
        //
        // };
        // console.log(data);
        // Util.post(url, data, (result)=> {
        //     console.log(result);
        //     if (navigator) {
        //         navigator.push(
        //             {
        //                 name: 'BottomNavigator',
        //                 component: BottomNavigator,
        //                 // params:{
        //                 //     phoneNumber:this.state.phoneNumber,
        //                 //     sendNumber:this.state.sendNumber
        //                 // }
        //             }
        //         )
        //     }
        // }, (err)=> {
        //     console.log(err);
        // });

    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingTop: 200,
        paddingRight: 40,
        //justifyContent: 'center',
        // flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: '#f5fcff'
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
    },
    formInput: {
        flexDirection: 'row',
        height: 60,
        padding: 20,
    },
    formInputSplit: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5377e',
        paddingLeft: 20
    },
    formInputText: {
        flex: 2,
        paddingLeft: 10

    },
    formInputNumber: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        width: 18,
        height: 38,
        lineHeight: 38,
        borderRadius: 20,
    },
    formInputSend: {
        color: '#2b2b2b',
        textAlign: 'center',
        lineHeight: 24
    },
    registerBtn: {
        backgroundColor: '#e5377e',
        padding: 15,
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    registerNew: {
        padding: 15,
        alignItems: 'center',
        marginTop: 35,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 17,
    },
    registerWrap: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    sendCodeBtn: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 1,
        alignItems: 'center',
        width: 30,
        height: 38,
        borderRadius: 20,
    },
    imgStyle: {
        resizeMode: 'stretch',
        flex: 1,
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height
    }

});
