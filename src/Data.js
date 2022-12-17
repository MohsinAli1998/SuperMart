import {useState} from 'react';

function Data(Props){
    const [name,setName]=useState();
    return(
        <div style={{    borderRadius: "15px",backgroundColor: "yellow" ,margin:"10px"}}>

            <h1 style={{textAlign:"center"}}>Jason Work</h1>
        </div>
    );

}
export default Data;