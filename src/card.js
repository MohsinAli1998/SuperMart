import { useState } from 'react';
import './App.css';
// import Data from './Data.js';
function Card1(Props){
    const [color,setColor] =useState("skyblue");
    const [btntext,setBtntext] = useState("click");
    const changecolor=()=> {
        if(color === "skyblue" && btntext ==="click"){
            setColor('red');
            setBtntext('click here');
        }else{
            setColor('skyblue');
            setBtntext('click');
        }
        //alert ({setColor});
    }
   
   
    return(


       <>
        <div style={{    borderRadius: "15px",backgroundColor: "gray",       
            height: "300px",
            padding:" 20px",
            marginLeft:"20px",
            width: "auto"}}>
            <img style={{width:"200px", height:"200px"}} src={Props.img} alt="logo" />
            {/* <h1> Hello </h1> */}
            <div style={{textAlign:"center"}}>
                
                <button id="bt1" style={{alignSelf:"center", 
                    backgroundColor:color
                    ,height : "30px"
                    ,width:"100px"
                    , borderRadius:"15px"}} 
                    onClick={changecolor}>
                    {btntext}
                </button>

            </div>
            
        </div>
       
        </>
            
           
            

        
    );
    
    
    
}

// return(<Data text="Props" name ="Example"/>);
export default Card1;