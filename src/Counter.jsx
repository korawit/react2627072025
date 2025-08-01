import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0); 
    const [value,setValue]=useState("");
    function onTextChange(e){
        let v=e.target.value;
        setValue(v) 
        console.log(`${v} $ is equal to ${v*31} baht`);
        //console.error("error");
    }
    return(<>
    <input onChange={(e)=>onTextChange(e)}></input><br/>
    <p>{value} miles is eqaul to {parseFloat(value)*1.60934}</p>
    <p>{value} $ is equal to {parseInt(value)*31} baht</p>
    <p>You typed {value.length} chars</p>
    
    <button onClick={()=>setCount(count-1)} style={{"margin-right":"5px"}}>-</button>
    <button onClick={()=>setCount(0)}>reset</button>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>You clicked {count} times</p>
    </>);
}