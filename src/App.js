import React, {useState} from "react";
import "./style.css";
import InputComponent from "./components/InputComponent";
import ListComponent from "./components/ListComponent";

export default function App() {

  const [list,setList] = useState([]);

  console.log(list);

  return (
    <div>
      <InputComponent setList={setList}/>
      <ListComponent list={list} setList={setList}/>
    </div>
  );
}
