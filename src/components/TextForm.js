import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("button was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnchange} value={text}></textarea>
            </div> 
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
        </div>
    )
}
