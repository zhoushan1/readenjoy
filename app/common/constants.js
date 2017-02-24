/**
 * Created by zhoushan on 2017/2/23.
 */
import {Dimensions} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};



export default {
    window: window
};