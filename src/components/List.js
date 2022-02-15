import React, { useState } from 'react';

function List(){

    // const [state, setState] = useState({
    //     list: [],
    //     item: ""
    // })
    // one of two solutions but not recommended as you are passing in an object and it will be reset every time  

    const [list, setList] = useState([])
    
    const [item, setItem] = useState("")
    // it is recommended to set for each state

    function addToList(e){
        e.preventDefault()
        if (item) {
                setList(prevList => [...prevList, item])
                setItem("")
        }
    }

    function handleChange(e){
        setItem(e.target.value)
    }
    
    return(
        <div className="left">
            <h3>Your List</h3>
            <ul>
                {list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <form onSubmit={addToList}>
                <input type="text" value={item} onChange={handleChange}/>
                <input type="submit" value="Add to List"/>
            </form>
        </div>
    )
}

// class List extends React.Component {
//     state = {
//         list: [],
//         item: ""
//     }

//     addToList = (e) => {
//         e.preventDefault()
//         if (this.state.item) {
//             this.setState(prevState => ({
//                 list: [...prevState.list, prevState.item],
//                 item: ""
//             }))
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             item: e.target.value
//         })
//     }

//     render() { 
//         return (
//             <div className="left">
//                 <h3>Your List</h3>
//                 <ul>
//                     {this.state.list.map((item, i) => <li key={i}>{item}</li>)}
//                 </ul>
//                 <form onSubmit={this.addToList}>
//                     <input type="text" value={this.state.item} onChange={this.handleChange}/>
//                     <input type="submit" value="Add to List"/>
//                 </form>
//             </div>
//         );
//     }
// }
 
export default List;