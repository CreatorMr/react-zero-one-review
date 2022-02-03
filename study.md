### React

#####  组件化开发
- 可组合： 一个组件可以和其它的组件一起使用或者可以直接嵌套在另一个组件的内部
- 可重用： 每个组件都是具有独立功能的，他可以被使用在多个场景中
- 可维护： 每个小组件仅仅包含自身的逻辑，更容易被理解和维护

##### 状态

setState 两功能
- 1、修改状态
- 2、重新render 

state更新可能是异步的
- 处于性能考虑，React可能会把多个setState() 调用合并成一个调用
- 因为this.props 和 this.state 可能会异步更吸毒男，所以不要依赖他们的值来更新下一个状态
- 可以让setState() 接收一个函数而不是一个对象。 这个函数用上一个state作为第一个参数

state的更新会被合并
- 当你调用setSate() 的时候，React会把你提供的对象合并到当前的state

当调用setState的时候，状态并没有改变，而是放入一个队列中
```javascript
this.setState(state => ({number: state.number + 1}))

let state = {number: 0}
let callbacks = []
callbacks.push([state => ({number: state.number + 1}), () => console.log(state)])
callbacks.push([state => ({number: state.number + 1}), () => console.log(state)])
callbacks.push([state => ({number: state.number + 1}), () => console.log(state)])
callbacks.push([state => ({number: state.number + 1}), () => console.log(state)])
let v;
let fns = []
while(v = callbacks.shift()) {
    let [cb, fn] = v
    state = cb(state)
    fns.push(fn)
}
console.log(state)
fns.forEach(fn=> fn())
```
##### 解决this指针的三种方法
- this.add.bind(this) 把add 方法里面的this 指针绑定为组件实例
- () => this.add() 匿名函数
- 在定义的时候 add = () => {} 即可以直接使用this.add 给类的实例增加一个add的属性，而这个属性里的this绑定位组件的实例

replaceState 15.5 之前有

this.forceUpdate() 强制刷新页面

##### 纯 函数有两个特点

 - 1、不能改变入参
 - 2、不能影响作用域之外的变量

##### 受控组件 非受控组件 以及ref

1、ref= 字符串 2、ref = 函数

ref 可以引用类组件，不能引用函数组件
函数组件一渲染就销毁了没有实例，所以拿不到
```javascript
// 使用
<TextInput2 ref1={this.textInput} />


function TextInput2(props, ref1) {
    return <input ref={ref1} />
}
React.forwardRef(TextInput2)

// 实现 forwardRef
function forwardRef(funComponent) {
    return function(props) { // ref= {current: null}
        return funComponent(props, props.ref1)
    }
}
```


```javascript
// 1=====>
sum() {
    console.log(this.refs.numA.value)
}
<input ref="numA" />+ <input ref="numB" /> <button onClick={this.sum}>=</button><input ref="result" />
// 2=====>
sum2() {
    console.log(this.numA.value)
}
<input ref={inst => this.numA = inst} />


//3 =====>
sum3() {
    console.log(this.numA.current.value)
}
constructor(props) {
    super(props)
    this.numA = React.createRef()
}
<input ref={this.numA} />
```

createRef实现


```javascript
function createRef() {
    return { current: null}
}
```



受控组件和非受控组件

非受控组件指的是DOM元素的值存在DOM元素内部，不受react 控制
受控组件只的DOM元素的值受React状态控制

defaultValue 赋默认值

单向数据流


##### setState  深入理解

```javascript
class Component {
    constructor(props) {
        this.props = props
    }
    createDOMFromDOMString(domString) {
        let div = document.createElement('div');
        div.innerHTML = domString;
        return div.children[0];
    }

    setState(partialState) {
        this.state = Object.assign(this.state, partialState)
        let oldElement = this.domElement;
        let newElement = this.render();
        oldElement.parentElement.replaceChild(newElement, oldElement)
    }

    renderElement() {
        let htmlString = this.render();
        this.domElement = this.createDOMFromDOMString(htmlString)
        // 将Counter的组件实例放在component上
        this.domElement.component = this
        return this.domElement;
    }

    mount(container) {
        container.appendChild(this.renderElement())
    }
}

window.trigger = function(event, method,  ...others) {
    event.target.component[method].call(event.target.component, event, ...others)
}
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {number: 0}
    }

    add() {
        this.setState({
            number: this.state.number + 1;
        })
    }

    render() {
        return `<button onclick-="trigger(event, add)">
        
            ${this.props.name}: ${this.state.number}
        </button>
        `
    }
}

```
react 所有事件委托给全局的document

