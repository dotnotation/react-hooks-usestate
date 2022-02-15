import React, {useState} from 'react';
import Counter from './Counter';
import List from './List';

function Main(props){
    return (
        <p>Hi!</p>
    )
}
// class Main extends React.Component {
//     state = {
//         darkMode: false
//     }

//     handleModeChange = () => {
//         this.setState(prevState => ({
//             darkMode: !prevState.darkMode
//         }))
//     }

//     render() {
//         return (
//             <div className={this.state.darkMode ? "main dark-mode" : "main light-mode"}>
//                 <button onClick={this.handleModeChange}>{this.state.darkMode ? "Light Mode" : "Dark Mode"}</button>
//                 <Counter />
//                 <List />
//             </div>
//         )
//     }
// }

export default Main;