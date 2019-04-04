/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:输入框测试
 */

import React from 'react';
import {configure, shallow,mount} from 'enzyme';
import InputText from '../app/InputText/index';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing TextInput component', () => {

    // 测试UI
    it('renders TextInput as expected', () => {
        const tree = renderer.create(<InputText />).toJSON();
        // 快照测试
        expect(tree).toMatchSnapshot();
    });

    // 测试输入的默认值和调用改变方法
    it('renders TextInput as state', () => {
        const str = '哈哈';
        const wrapper = shallow(
            <InputText value={str} callBack={jest.fn((text) => text)} />
        );

        // 测试初始值是否成功赋予state
        expect(wrapper.state()).toEqual({value:str});

        // 测试初始值是否成功赋予到value
        expect(wrapper.props().children.props.value).toBe(str);

        // 测试填写input框，验证回调函数里面得到的值
        expect(wrapper.props().children.props.onChangeText('shshshsh')).toBe('shshshsh');
    });

});