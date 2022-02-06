import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return <div>Header</div>
    }
}
class Title extends Component {
     // 指定我要获取哪些上下文对象
     static contextTypes = {
        color: PropTypes.string
    }
    render() {
        return <div>Title {this.context.color}</div>
    }
}
class Main extends Component {
    render() {
        return <div>Main</div>
    }
}
class Content extends Component {
    render() {
        return <div>Content</div>
    }
}
class OldContext extends Component {
    constructor(props) {
        super(props)
        this.state = {color: 'gray'}
    }
    // 定义子上下文对象的属性和类型
    static childContextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func,
    }
    // 返货或者定义真正的子上下文
    getChildContext() {
        return {
            color: this.state.color,
            setColor: this.setColor
        }
    }
    setColor(color){
        this.setState({
            color
        })
    }
    
    render() {
        return (
            <div style={{ border: '1px solid red' }}>
                page
                <Header>
                    <Title></Title>
                </Header>
                <Main>
                    <Content></Content>
                </Main>
            </div>
        )
    }
}

export default OldContext
