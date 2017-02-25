/**
 * Created by zhoushan on 2017/2/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Bookshelf from './ListPage'
import Detail from './UserInfoPage'


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'bookList',
        }
    }

    render() {
        return (
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'bookList'}
                    title="图书列表"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.bottomIcon} source={require('../img/book_list_unchecked.png')} />}
                    renderSelectedIcon={() => <Image style={styles.bottomIcon} source={require('../img/book_list_checked.png')} />}
                    onPress={() => this.setState({ selectedTab: 'bookList' })}>
                    <Bookshelf {...this.props} navigator = {this.props.navigator}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mineBookList'}
                    title="我的书架"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.bottomIcon} source={require('../img/mime_bookshelves_unchecked.png')} />}
                    renderSelectedIcon={() => <Image style={styles.bottomIcon} source={require('../img/mime_bookshelves_checked.png')} />}
                    onPress={() => this.setState({ selectedTab: 'mineBookList' })}>
                    <Detail {...this.props} navigator = {this.props.navigator}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    bottomIcon: {
        width:25,
        height:25
    }
});

