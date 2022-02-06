import React, { Component } from 'react'

class MouseTracer extends Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
    }
    handleMouseMove = (event) => {
        console.log(event)
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return <div onMouseMove={this.handleMouseMove}>
            <p>移动鼠标</p>
            <p>当前鼠标的位置 x: {this.state.x} , y {this.state.y}</p>
        </div>
    }
}

export default MouseTracer;
