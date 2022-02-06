import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from "react";
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
import Logger from './high/Logger'
import Mousetracer from './MouseTracer'
// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             number: 0
//         }
//     }
//     add() {
//         this.setState({
//             number: this.state.number + 1
//         })
//     }
//     sum = () => {
      
//     }
//     render() {
//         return (
//             <>
//                 <p>{this.state.number}</p>
//                 <button onClick={this.add.bind(this)}>+</button>
//                 <input ref="numA" />+ <input ref="numB" /> <button onClick={this.sum}>=</button><input ref="result" />
//             </>
//         )
//     }
// }

// const App = function () {
//     const [todo, setTodo] = useState({ id: 1, status: "TODO" });
//     return (
//       <div className="App">
//         <button
//           onClick={() => {
//             todo.status = !todo.status;
//             console.log(todo)
//             debugger
//             setTodo(todo);
//           }}
//         >
//           Toggle Status
//         </button>
//         <h1>{todo.status}</h1>
//       </div>
//     );
// }

ReactDOM.render(<Mousetracer/>, document.getElementById('root'))
