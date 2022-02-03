// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/**
 * 
 *  使用StrictMode的优点：
    识别不安全的生命周期组件
    有关旧式字符串ref用法的警告
    关于使用废弃的 findDOMNode 方法的警告
    检测意外的副作用
    检测过时的 context API
 */
/**
 * 页面分成若干的独立的部分，单独编写，单独维护
 *
 */

// function Welcome(props) {
// return <h1>hello{props.name}</h1>
// }

// ReactDOM.render(<Welcome name="dasf"/>, document.getElementById('root'))
import React from './react'
import ReactDOM from './react-dom'
// const element = (<h1 className="title" style={{color: 'red'}}>
// hello <span>world</span>
// </h1>)
/*#__PURE__*/
const element0 = React.createElement(
    'h1',
    {
        className: 'title',
        style: {
            color: 'red',
            fontSize: '50px'
        }
    },
    'hello ',
    /*#__PURE__*/ React.createElement('span', null, 'world')
)

function Welcome(props) {
    return React.createElement('h1', {
      id: 'welcome'
    }, props.name, props.age) 
}
class Welcome1 extends React.Component {
  render() {
    return React.createElement('h1', { id: 'welcome' }, this.props.name, this.props.age) 
  }
}
const element = React.createElement(Welcome1, {
  name: '测试函数组件',
  age: 10
})
ReactDOM.render(element, document.getElementById('root'))
