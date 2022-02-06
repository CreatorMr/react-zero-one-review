import { Component } from 'react'

function createContext() {
    class Provide extends Component {
        static value
        constructor(props) {
            super(props)
            Provide.value = props.value
            this.state = { value: props.value }
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            Provide.value = nextProps.value
            return {value: nextProps.props}
        }
        render() {
            return this.props.children
        }
    }
    class Consume extends Component {
        render() {
            return this.props.children(Provide.value )
        }
    }
    return { Provide , Consume}
}

// renderProps
export default createContext