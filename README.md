***jest 测试***

>  安装enzyme

```
npm install enzyme --save-dev

npm install enzyme-adapter-react-16 --save-dev

npm install react-dom  --save-dev

```


> jest 测试(三个命令任选其一)

```
jest

npm test

npm run test
```

> 覆盖快照

```
jest -u
```

> 配置

```
sudo npm install -g jest-cli
```

> 生成测试覆盖率报告

```
jest --coverage
```


> api

1. 返回期望的对象
expect()

2. 匹配值相等
toBe()

3. 匹配引用类型相等
toEqual()

4.非

```
.not.toBe();

toBeNull 只匹配 null
toBeUndefined 只匹配 undefined
toBeDefined与toBeUndefined相反
toBeTruthy任何匹配if语句为真
toBeFalsy任何匹配if语句为假
```

5.数字匹配器

```
toBeGreaterThan()：大于
toBeGreaterThanOrEqual()：大于或者等于
toBeLessThan()：小于
toBeLessThanOrEqual()：小于或等于
```

6.字符串
使用toMatch()函数测试字符串，传递的参数需要是正则表达式。例如

```
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```


7.数组
如果要检测某个字符串是否包含某个字符串或字符，可以使用toContain()。例如：

```
const list = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('字符串包含', () => {
    expect(list).toContain('beer');
});
```


8.toThrow
如果想在测试特定函数的时候抛出错误，则可以在它调用的时候可以使用toThrow()。


9. 浮点数比较
toBeCloseTo

```
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});
```


> 真实案例，测试root

1.root源代码

```
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
```


2.测试root的代码

```
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

```

> 取值props和state，以及设置prop和state的值

```

        // 设置跟组件的props值，可在componentWillReceiveProps(nextProps){}取到值
        console.log("setProps====",wrapper.setProps({value:2}));

        // 返回当前组建的类型
        console.log("type====",wrapper.type());

        // 返回指定位置的子组件的dom节点
        console.log("get====",wrapper.get(0));

        // 返回指定位置的子组件
        console.log("at====",wrapper.at(0));

        // 返回第一个子组件
        console.log("first====",wrapper.first());

        // 返回最后一个子组件
        console.log("last====",wrapper.last());

        // 返回当前组件的文本内容
        console.log("text====",wrapper.text());

        // 返回当前组件的html代码形式
        // console.log("html====",wrapper.html());

        // 返回根组件的所有属性
        console.log("props====",wrapper.props());

        // 返回根组件的指定属性
        console.log("prop style====",wrapper.prop('style'));

        // 返回根组件的状态
        console.log("state====",wrapper.state());

        // 设置根组件的状态
        console.log("setState====",wrapper.setState({name:'好人'}));

        // wrapper.props().onPress();
        // 设置根组件的属性
        // wrapper.simulate('click');

```
