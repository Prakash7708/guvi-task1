import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [data,setData]=useState([])
  const [value,setValue]=useState(0)
  const [pin,setPin]=useState(0)
  const [newvalue,setNewvalue]=useState(0)
  //const [query,setQuery]=useState(0)
  let newVariable=()=>{
    //alert(newvalue)
    setNewvalue(value*10)
  }
  let  valueChange=(id)=>{
    if(id===1){
      setValue((value*1)+1)
      newVariable();
      
      
    }else if(id===0){
      setValue(value-1)
      newVariable();
    }
    
     
  }

  // useEffect(() => {
    
  // }, []);
  
  let search=()=>{
    fetchData();
  }
  
  let fetchData = async () => {

    try {
      const res = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      //console.log(res.data[0].PostOffice)
      //setData(res.data[0].PostOffice[0].Name);
      setData(res.data[0].PostOffice)
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
   <div>
    <h4>Api Results</h4>
    <ul>
     {
       data.map((input)=>{
        return <li>{input.Name}</li>
       })
     }
    </ul>
    <h3>{value}</h3>
    <h2>{newvalue}</h2>
    <lebel>Numbers Task</lebel>
    <input onChange={(e)=>setValue(e.target.value)}></input>
    
    <button onClick={()=>valueChange(1)}>+</button>
    <button onClick={()=>valueChange(0)}>-</button>
    <lebel>Api task</lebel>
    <input onChange={(e)=>setPin(e.target.value)}></input>
    <button onClick={()=>search()}>Search</button>
    
   
   
   </div>
       
  );
}

export default App;
