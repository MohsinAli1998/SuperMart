import React from 'react';
import Logo from './CartLogo.png';
import Logo1 from './logo1.png';
import './mart.css';
function Mart(){
    return(
        <>
        <div className='d1'>
        <img  src={Logo} alt='error'/>        
        <input id='search' type="search" placeholder='Search here' ></input>
        <a href="#"><i className="signin"></i> SignIn</a>
        <a href="#"><i className="signin"></i> SignUp</a>
        <img src={Logo1} alt="Loading error"></img>

        </div>
        
        </>
    );


}

export default Mart;