import React, {useState} from "react";

const ListComponent = ({list,setList}) => {


    return (
        <div>
            <ul>
                {list.map((d,i)=>{
                    return (<li key={i}>{d}<button onClick={()=>setList((v)=>{
                        return v.filter((k,j)=>j!==i);
                    })}>Del</button></li>)
                })}
            </ul>        
        </div>
    );
}

export default ListComponent;