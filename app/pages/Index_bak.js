/**
 * Created by zhoushan on 2017/2/25.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
import utils from '../common/utils';
import * as urls from '../common/common_url';

var res_data=[];
export default class ListPage extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11']),
        };
    }
    componentDidMount() {
        let obj;
        //获取图书列表
        let url=urls.bookSearch;
        let data={
            title:'',
            page:1,
            size:20
        };
        utils.ajax_post(url,data,(result)=>{

            res_data=utils.handleList(result);

            this.setState({
                dataSource:res_data
            })


        },(err)=>{
            alert(err)
        });

    }

    listChange(type) {
        Alert.alert('当期选择' + type);
    }

    onButtonPress() {
        Alert.alert('Button has been pressed!');
    }

    userCenter() {
        Alert.alert('没想到你会翻我的牌！');
    }



    itemView(rowData) {
        return <View style={styles.itemStyle}>
            <Image source={{uri:rowData.image}} style={styles.itemImageStyle}/>
            <Text style={styles.itemTextStyle}>{rowData.title}</Text>
        </View>;
    }

    render() {
        return (
            <Image source={require('../img/bg.png')} style={styles.backgroundImage}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={this.userCenter.bind(this)}>
                        <Image source={require('../img/user.png')} style={styles.searchButton}></Image>
                    </TouchableOpacity>
                    <TextInput placeholderTextColor="#CDC5BF"
                               placeholder="你想要找的图书..."
                               style={styles.searchTextInput}
                               autoCapitalize="none"
                               autoCorrect={false}
                               underlineColorAndroid={'transparent'}
                               clearButtonMode="always"
                               textAlign='center'
                    />
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                        <Image source={require('../img/sao.png')} style={styles.searchButton}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.top2}>
                    <TouchableOpacity onPress={this.listChange.bind(this, 1)}>
                        <Text style={styles.buttonBooks}>最新图书</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.listChange.bind(this, 2)}>
                        <Text style={styles.buttonBooks}>热门图书</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.listChange.bind(this, 3)}>
                        <Text style={styles.buttonBooks}>可借图书</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.center}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) => this.itemView(rowData)}
                        contentContainerStyle={styles.section}
                        removeClippedSubviews={false}/>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    itemStyle: {
        width: width / 3,
        height: height / 3.5,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 8,
    },
    itemImageStyle: {
        width: (width - 50) / 3,
        height: (height / 3.5) - 30
    },
    itemTextStyle: {
        width: (width - 50) / 3,
        height: 30,
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        width: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },
    container: {
        flex: 1
    },
    buttonBooks: {
        flex: 1,
        width: width / 3,
        textAlign: "center",
        color: 'white',
        marginTop: 20,
    },
    buttonList: {
        flex: 1,
        width: width / 2,
        textAlign: "center",
        color: 'white',
        marginTop: 20,
    },
    top: {
        paddingTop: 2,
        flexDirection: "row",
        height: 60,
    },
    top2: {
        paddingTop: 2,
        flexDirection: "row",
        height: 50,
    },
    center: {
        height: height - 180,
        backgroundColor: "#FFFFFF"
    },
    bottom: {
        height: 50,
        backgroundColor: "#FFFFFF"
    },
    searchRow: {
        backgroundColor: '#eeeeee',
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    searchTextInput: {
        backgroundColor: '#5a626f',
        borderColor: '#00000000',
        color: "#CDC5BF",
        borderRadius: 3,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8,
        width: width - 80,
        height: 40,
        // alignSelf: 'center',
        //根据不同平台进行适配
        marginTop: Platform.OS == 'ios' ? 4 : 8,
    },
    searchButton: {
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        borderRadius: 3,
        borderWidth: 1,
        paddingLeft: 8,
        paddingTop: 5,
        marginTop: 13,
        width: 40,
        height: 26,
        resizeMode: Image.resizeMode.contain,
    },
});

