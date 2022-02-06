/**
 * 纯 函数有两个特点
 *
 * 1、不能改变入参
 * 2、不能影响作用域之外的变量
 */

import { Component } from 'react'

export default class PureComponent extends Component {
    isPureComponent = true
    // 重写了方法，传入新的属性对象和状态兑现个，然后返回一个是否需要更新的Boolean值
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
    }
}
// 浅比较
function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) return true
    if (typeof obj1 !== 'object' || obj1 === null) {
        return false
    }
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    for (const k of keys1) {
        if (!obj2.hasOwnProperty(k) || obj2[k] !== obj1[k]) {
            return false
        }
    }
    return true
}


// 函数式组件怎么办？ 
// ====> React.memo()