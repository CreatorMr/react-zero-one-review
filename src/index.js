import React from 'react'
import ReactDOM from 'react-dom'
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
// import React from './react'
// import ReactDOM from './react-dom'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    add() {
        this.setState({
            number: this.state.number + 1
        })
    }
    sum = () => {
      
    }
    render() {
        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={this.add.bind(this)}>+</button>
                <input ref="numA" />+ <input ref="numB" /> <button onClick={this.sum}>=</button><input ref="result" />
            </>
        )
    }
}

ReactDOM.render(<Clock/>, document.getElementById('root'))
