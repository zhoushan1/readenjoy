
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Common from '../common/constants';
import utils from '../common/utils';
import * as urls from '../common/common_url';
import Ajax from 'ajax-promise-es6'


export default class SearchHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookName: ''
        };
    }
    render() {
        return (
            <View style={styles.headerWrap}>

                <View
                    activeOpacity={0.75}
                    style={styles.searchInput}

                >
                    <TouchableOpacity onPress={this.searchBook.bind(this)}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../img/ic_search.jpg')}
                    />
                    </TouchableOpacity>

                    <TextInput placeholder='请输入书名' style={styles.searchPlaceholder}
                               onChangeText={this.onChangeBook.bind(this)}/>
                </View>

            </View>
        )
    }
    onChangeBook(text){
        this.state.bookName = text;
       // console.log(this.state.bookName);
    }
    searchBook(){
        let bookName=this.state.bookName;

        if(bookName==''){
            alert('请输入书名');
            return;
        }

        let url=urls.bookSearch;
        let data={
            title:bookName,
            page:1,
            size:20
        };

        utils.ajax_post(url,data,(result)=>{
            console.log(result)
        },(err)=>{
            alert(err)
        })

        // Ajax.post(url,data,{
        //     'Accept': 'application/json',
        //     "Content-Type": "application/x-www-form-urlencoded"
        // }).then((res)=> {
        //     let result=JSON.parse(res);
        //     console.log(result);
        // }).catch((err)=>{
        //     console.log(err);
        // });





        //console.log(bookName)
    }
}

const styles = StyleSheet.create({
    headerWrap: {
        flex: 1,
        paddingLeft:1,
        paddingTop: 1,
        backgroundColor: '#ff7419',


    },

    searchInput: {
        flexDirection: 'row',
        height: 60,
        padding:20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdada',
    },

    searchIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'

    },

    scanIcon: {
        width: 60,
        height: 30,
    },

    searchPlaceholder: {
        flex: 2,
        paddingLeft: 10

    },
    searchBtn:{
       flex:1,

    }
})
