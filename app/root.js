/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:app入口
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import BigButton from './BigButton/index';
import InputText from './InputText/index';

export default class Root extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            psw:'',
            isLogin:false
        }
    }

    // 登录方法
    loginEvent = () => {
        const { name,psw } = this.state;
        if(name.length>0&&psw.length>0){
            this.setState({
                isLogin:true
            });
        }else{
            this.setState({
                isLogin:false
            });
        }
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            name:nextProps.valueProps
        });
    }


    render() {
        const {name,psw} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    姓名：
                </Text>
                <InputText value={name} callBack={(value) => this.setState({name:value})}/>

                <Text style={styles.welcome}>
                    密码：
                </Text>
                <InputText value={psw} callBack={(value) => this.setState({psw:value})}/>

                <BigButton title={'提交'} callBack={() => this.loginEvent()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCF8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});