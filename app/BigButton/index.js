/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:点击的button
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class BigButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title,callBack } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => callBack()}>
                <View style={{width:300,height:50,alignItems: 'center',justifyContent:'center',backgroundColor:'#00b7e3',borderRadius:4}}>
                    <Text style={{color:'#fff',fontSize:18}}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:300,
        height:50
    },
});