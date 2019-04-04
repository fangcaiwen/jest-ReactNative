/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:输入
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:props.value
        }
    }

    render() {
        const { value } = this.state;
        const { callBack } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={'请输入您所需要的字符'}
                    onChangeText={(text) => callBack(text)}
                    value={value}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:300,
        height:50,
        borderWidth:1,
        borderColor:'#888',
        justifyContent:'center',
        borderRadius:4,
        marginBottom:10
    },
    textInputStyle:{
        flex:1,
        fontSize:16,
        paddingLeft:10
    }
});