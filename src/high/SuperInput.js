import React, { Component } from 'react';

class SuperInput extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }
    componentDidMount() {
        this.setState({
            value:localStorage.getItem('username')
        })
    }
    render() {
        return (
            <div>
                <input defaultValue={this.state.value} />
            </div>
        );
    }
}

export default SuperInput;
