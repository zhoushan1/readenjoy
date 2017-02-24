import React, {Component} from 'react';
import Toast from 'react-native-root-toast';
//import md5 from 'react-native-md5';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ListView,
    Navigator,
    Animated,
    ScrollView

} from 'react-native';
import Util from '../common/utils';
//import * as urls from '../common/common_url';
//import LoginPage from './LoginPage';
//import SetPassword from './SetPassword';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            company:'',
            phoneNumber: '',
            imgNumber: '',
            sendNumber: '',
            imgUrl: 'https://facebook.github.io/react/img/logo_og.png',
            seriesNumber: '',
            source: 'look',
            type: '1'
        };
    }

    componentDidMount() {
        //首次渲染的时候请求一次图片验证码的URL

        // let imgUrl = urls.urlDefaultImg;
        // Util.get(imgUrl, (result)=> {
        //
        //     console.log(result);
        // }, (err)=> {
        //     console.log(err);
        // })
    }

    componentWillUpdate() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <TextInput placeholder='昵称' style={styles.loginInput}
                               onChangeText={this.onChangeName.bind(this)}/>
                </View>


                <View style={[styles.formInput, styles.formInputSplit]}>
                    <TextInput placeholder='手机号' style={styles.loginInput}
                               onChangeText={this.onChangeMobile.bind(this)}/>
                </View>

                <View style={[styles.formInput, styles.formInputSplit]}>
                    <TextInput placeholder='所属公司' style={styles.loginInput}
                               onChangeText={this.onChangeCompany.bind(this)}/>
                </View>

                <View style={[styles.formInput, styles.formInputSplit]}>
                    <TextInput placeholder='输入图中数字' style={styles.formInputText}
                               onChangeText={this.onChangeImg.bind(this)}/>

                    <TouchableOpacity style={styles.checkImgBtn} onPress={this.changeImg.bind(this)}>
                        <Image source={{uri: this.state.imgUrl}}
                               style={{width: 60, height: 34, resizeMode: 'contain'}}/>
                    </TouchableOpacity>

                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <TextInput placeholder='输入验证码' style={styles.formInputText}
                               onChangeText={this.onChangeCode.bind(this)}/>
                    <TouchableOpacity style={styles.sendCodeBtn} onPress={this.sendMes.bind(this)}>
                        <Text style={styles.formInputSend}>
                            发送验证码
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={this.registerSure.bind(this)}>
                    <Text style={{color: '#ffffff'}}>
                        确定
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn} onPress={this.clickJump.bind(this)}>
                    <Text style={{color: '#ffffff'}}>
                        返回
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
    onChangeName(text){
        this.state.name = text;
    }

    onChangeMobile(text) {
        this.state.phoneNumber = text;
    }
    onChangeCompany(text){
        this.state.company = text;
    }

    onChangeImg(text) {
        this.state.imgNumber = text;
    }

    onChangeCode(text) {
        this.state.sendNumber = text;
    }

    clickJump() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    changeImg() {
        //设置刷新图片验证码的URL
        // let imgUrl = urls.urlRefreshImg;
        // Util.get(imgUrl, (result)=> {
        //     console.log(result);
        //     this.setState({
        //         imgUrl: result.data.meta.verifyCodeImgUrl
        //     })
        //
        // }, (err)=> {
        //     console.log(err);
        // })
    }

    sendMes() {
        let {phoneNumber, imgNumber}=this.state;
        let _imgUrl = this.state.imgUrl;
        //let _seriesNumber = Util.GetQueryString(_imgUrl, 'seriesNumber');


        if (!phoneNumber.length) {
            Toast.show('请输入手机号', {position:Toast.positions.CENTER});
            return;
        }

        if (!imgNumber.length) {
            Toast.show('请输入图片验证码', {position:Toast.positions.CENTER});
            return;
        }

        //发送短信验证码
        //let url = urls.urlSendMes;
        let data = {
            phoneNumber: this.state.phoneNumber,
            imageVerify: this.state.imgNumber,
            type: '1'
        };

        // Util.post(url, data, (result)=> {
        //     console.log(result);
        // }, (err)=> {
        //     console.log(err);
        // });

    }

    registerSure() {
        let {phoneNumber, imgNumber, sendNumber}=this.state;
        const {navigator}=this.props;

        if (!phoneNumber.length) {
            Toast.show('请输入手机号', {position:Toast.positions.CENTER});
            return;
        }
        if(Util.testPhone(phoneNumber)){
            Toast.show('请输入正确的手机号', {position:Toast.positions.CENTER});
            return;
        }

        if (!imgNumber.length) {
            Toast.show('请输入图片验证码', {position:Toast.positions.CENTER});
            return;
        }
        if (!sendNumber.length) {
            Toast.show('请输入短信验证码', {position:Toast.positions.CENTER});
            return;
        }

        // 跳转到设置密码页面
        //let url = urls.urlCodeCheck;

        let data = {
            phoneNumber: this.state.phoneNumber,
            smsCode: this.state.sendNumber,
            source: 'look',
            type:'1'
        };

        // Util.post(url, data, (result)=> {
        //
        //     if (navigator) {
        //         navigator.push(
        //             {
        //                 name: 'SetPassword',
        //                 component: SetPassword,
        //                 params:{
        //                     phoneNumber:this.state.phoneNumber,
        //                     sendNumber:this.state.sendNumber
        //                 }
        //             }
        //         )
        //     }
        //
        //
        // }, (err)=> {
        //     console.log(err);
        // });


    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingTop: 60,
        paddingRight:20,
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
        borderBottomColor: '#dbdada',
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
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 17,
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
    checkImgBtn: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 1,
        alignItems: 'center',
        width: 60,
        height: 38,
    }

});




