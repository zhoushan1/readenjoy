import React, { Component } from 'react';
import Modal from 'react-native-root-modal';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const portraitWidth = 153;
const portraitHeight = 204.5;

export default class readenjoy extends Component {

  constructor(props) {
    super(props);
    this.state = {
        bookName:'书名是什么',
        bookImgUrl:'http://pic35.nipic.com/20131121/2531170_145358633000_2.jpg',
        bookCategory:'科技',
        bookNumber:'101001',
        bookOwner:'wangjing',
        bookState:'可借阅',
        bookDescription:'这是一本吧爱打架垃圾分类 就解放啦街坊邻居阿里附近  啊放假垃圾垃圾分类',
    };
  }

  onClickShare() {
      Alert.alert('Button has been pressed!');
  };

  render() {
    return (
       <View style={styles.container}>
         <Image source={require('../img/detail/detail_background.png')} style={{flex:1}} />
         <View style={styles.infoArea} style={{flex:2, marginLeft: 30, marginRight:30}}>
            <Text style={styles.bookNameStyle}>{this.state.bookName}</Text>
            <View style={{flexDirection: 'row', marginTop:30}}>
                <Text style={styles.textLightBlack1}>所属分类:</Text>
                <Text style={styles.textLightBlack2}>{this.state.bookCategory}</Text>
                <Text style={styles.textLightBlack1}>图书编号:</Text>
                <Text style={styles.textLightBlack2}>{this.state.bookNumber}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop:10}}>
                <Text style={styles.textLightBlack1}>所属人:</Text>
                <Text style={styles.textLightBlack2}>{this.state.bookOwner}</Text>
                <Text style={styles.textLightBlack1}>当前状态:</Text>
                <Text style={styles.textLightBlack2}>{this.state.bookState}</Text>
            </View>
            <Text style={styles.bookDesStyle}>图书介绍:</Text>
            <Text style={styles.bookDesContentStyle}>{this.state.bookDescription}</Text>
         </View>

         <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={this.onClickShare} >
            <Image source={require('../img/detail/share_btn.png')} style={{width:300, height:80}} resizeMode={'contain'} />
         </TouchableOpacity>
         <Modal style={{top:60, left:(ScreenWidth - portraitWidth) / 2, width:portraitWidth, height:portraitHeight}} visible={true}>
            <Image source={{uri: this.state.bookImgUrl}} style={{width:portraitWidth, height:portraitHeight}} />
         </Modal>
       </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoArea: {
    flex: 2,
    backgroundColor: '#ffffff'
  },
  bookNameStyle: {
    marginTop: 80,
    fontSize: 19,
    textAlign: 'center',
    color: '#333333',
  },
  textLightBlack1: {
      fontSize: 13,
      textAlign: 'left',
      color: '#9B9B9B',
      flex:1
   },
  textLightBlack2: {
      fontSize: 13,
      textAlign: 'left',
      color: '#666666',
      flex:1
  },
  bookDesStyle: {
        fontSize: 13,
        textAlign: 'left',
        color: '#9B9B9B',
        marginTop:50
  },
  bookDesContentStyle: {
       fontSize: 13,
       textAlign: 'left',
       color: '#9B9B9B',
       marginTop:10
  },
});