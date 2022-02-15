import React, { useState } from 'react';

function Counter(){
    const [total, setTotal] = useState(0)

    function addToTotal(e){
        // this.setState(prevState => ({
        //     total: prevState.total + parseInt(e.target.dataset.add)
        // }))
        setTotal(prevTotal => prevTotal + parseInt(e.target.dataset.add))
        // notice how the dataset in return is a string so that is why you need to parseInt
        // no longer a method on the object which is why you convert the arrow function to a regular function
    }
    
    return(
        <>
            <p>Your total is: {total}</p>
            <div>
                <button onClick={addToTotal} data-add="1">Add 1</button>
                <button onClick={addToTotal} data-add="3">Add 3</button>
                <button onClick={addToTotal} data-add="5">Add 5</button>
                <button onClick={addToTotal} data-add="7">Add 7</button>
            </div>
        </>
    )
}

// class Counter extends React.Component {
//     state = {
//         total: 0
//     }

//     addToTotal = (e) => {
//         this.setState(prevState => ({
//             total: prevState.total + parseInt(e.target.dataset.add)
//         }))
//     }

//     render() { 
//         return (
//             <>
//                 <p>Your total is: {this.state.total}</p>
//                 <div>
//                     <button onClick={this.addToTotal} data-add="1">Add 1</button>
//                     <button onClick={this.addToTotal} data-add="3">Add 3</button>
//                     <button onClick={this.addToTotal} data-add="5">Add 5</button>
//                     <button onClick={this.addToTotal} data-add="7">Add 7</button>
//                 </div>
//             </>
//         );
//     }
// }
 
export default Counter;