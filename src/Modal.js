import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Modal extends Component {
    render() {
        return ReactDOM.createPortal(this.props.children, document.getElementById('modal-root'))
    }
}

export default Modal
