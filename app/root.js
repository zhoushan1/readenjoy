
import React, { Component } from 'react';
import {
    View,
    Navigator
} from 'react-native';

import HomePage from './pages/HomePage';
//初始化路由,默认第一个页面是登录页面
class NavigatorJump extends Component{
    render(){
        let defaultName='HomePage';
        //将组件class实例化成<Component/>标签
        let defaultComponent=HomePage;

        return(
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                }
                //渲染场景,route中是我们自定义的name和component
                //navigator 是Navigator对象
                renderScene={
                    (route,navigator)=>{
                        let Tmp=route.component;

                        return <Tmp {...route.params} navigator={navigator}/>
                    }
                }

            />
        )
    }
}
export default class Root extends Component {
    render() {
        return (
            <NavigatorJump>
            </NavigatorJump>
        )
    }
}

