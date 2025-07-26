import './Bmi.css';
import { useRef,useState } from "react";
function BmiText({bmi}){
    if(bmi<18.5){return (<><img src="under.jpg" height="200"/><h1>Underweight</h1></>);}
    if(bmi>30){ return (<><img src="over.jpg" height="200"/><h1>Overweight</h1></>);}
    return (<><img src="normal.jpg" height="200"/><h1>Normal</h1></>);
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0.0);
    function calBmi(){
        let w=parseFloat(w_inputRef.current.value);
        let h=parseFloat(h_inputRef.current.value)/100;
        setBmi(w/(h*h));
    }
    return (<><h1>Bmi Calculator</h1>
        Weight:<input ref={w_inputRef} className="bmi-input"/> kg.<br/>
        Height:<input ref={h_inputRef} className="bmi-input"/> cm.<br/>
        <button onClick={calBmi}>calculate</button>
        <p> Bmi value: {bmi.toFixed(2)} </p>
        <BmiText bmi={bmi}/>
    </>);
}