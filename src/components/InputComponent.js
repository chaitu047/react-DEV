import React, {useState} from "react";

const InputComponent = ({setList}) => {

    const [inVal,setInVal] = useState('');

    const inputHandler = (e) =>{
        setInVal(e.target.value);
    }

    return (
        <div>
            <input type='text' value={inVal} onChange={inputHandler} />
            <button onClick={(e)=>setList((d)=>[...d,inVal])}>Add</button>
        </div>
    );
}

export default InputComponent;