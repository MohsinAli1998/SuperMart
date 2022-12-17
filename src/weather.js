import React from "react";
import { useState } from "react";


function Weather(){
    const [data,setData]=useState({});
    const [show,setShow]=useState(false);
    console.log(data);
    const apifetch=()=>{
        var loc =prompt("Enter location :");
        if (loc === null){
            loc = 'Rawalpindi';
        }
        fetch(`https://api.weatherapi.com/v1/current.json?key=9ef0faa849984a359c255534221012&q=${loc}`)
        .then(res => res.json())
        .then(result=>{
            setData(result)
            console.log(result)})


    }
    const result=()=>{
        setShow(true);
    }
    return(
        <>
    <div className="d1" style={{textAlign:"center"}}>
       <h1 style={{textAlign:"center"}}>Temperature</h1>
    
        <button onClick={apifetch}>Select city</button>
        <br></br>
        <br></br>
        <button onClick={result}>show temp </button>
        {
            show === true?
            <>
            
            <p>{data.location.name}</p>
            <p>{data.location.country}</p>
            <img src={data.current.condition.icon} alt="Loading Error" />
            <p>{data.current.condition.text}</p>
            <p>{data.current.temp_c}  </p> 

            </>
            :null
        }
    
     </div>
     </>
    );





}
export default Weather;