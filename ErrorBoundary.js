import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(err, info) {
        if(err) {
            this.setState({
                hasError: true
            })
        }
    }
    render() {
       if(this.state.hasError) {
           return (<div>错误</div>)
       }
       return this.props.children;
    }
}

export default ErrorBoundary;

