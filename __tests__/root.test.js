/**
 * Created by 208439 on 2019/4/3
 *
 * Author: wind
 *
 * Content:root 测试用例
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {configure, shallow,mount} from 'enzyme';
import Root from '../app/root';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Testing Root component', () => {

    // 测试UI
    it('root  renders correctly', () => {
        const tree = renderer.create(<Root />).toJSON();
        // 快照测试
        expect(tree).toMatchSnapshot();
    });

    // 测试逻辑
    it('renders Root as login expected', () => {
        const wrapper = shallow(
            <Root />
        );

        // 默认值没有登录
        expect(wrapper.state().isLogin).toBeFalsy();

        //设置登录值
        wrapper.setState({name:'11',psw:'222'});

        // 点击登录
        wrapper.props().children[4].props.callBack();

        // 登录成功
        expect(wrapper.state().isLogin).toBeTruthy();


    });
});
