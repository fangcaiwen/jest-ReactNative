/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:button测试用例
 */
import React from 'react';
import {configure, shallow,mount} from 'enzyme';
import BigButton from '../app/BigButton/index';
import renderer from "react-test-renderer";

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing Bigbutton component', () => {

    // 测试UI
    it('renders as expected', () => {
        const tree = renderer.create(<BigButton />).toJSON();
        // 快照测试
        expect(tree).toMatchSnapshot();
    });

    // 测试button传值以及点击事件
    it('renders BigButton as logic expected', () => {
        const wrapper = shallow(
            <BigButton title={'提交'} callBack={jest.fn(() => true)} />
        );
        // wrapper.props();
        // 测试点击功能
        expect(wrapper.props().onPress()).toBeTruthy();

        // 测试title渲染功能
        expect(wrapper.props().children.props.children.props.children).toBe('提交');
    });

});
