import react from 'react';
import Logo from './shoppingbag.gif';
import Logo1 from './8logo.gif';
import Logo3 from './garments.jpg';
import Logo2 from './shoppingcart.gif';
import './mart.css';
import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee@1.1.2/dist/vanilla-marquee.js';
function Mart(){
    return(
        <>
        <div id='d8'>
        <div className='d1'>
            {/* <div id ='d7'><img id="img1" src={Logo} alt="Loading error"></img></div> */}
            <div id='d6'>
                <div id='d4'>

            
                    <div className='d3'>
                        <p>since</p><img id="img1" src={Logo} alt="Loading error"></img><p>2022</p>
                    </div>
                    <div id='d5'>
                     <h1>SUPERMART</h1>
                    </div>
                </div>
            {/* <img  src={Logo} alt='error'/>         */}
            <input id='search' type="search" placeholder='Search here' ></input>
            <div id='d2'>
                <img id="img1" src={Logo1} alt="Loading error"></img>
                <a href="#"><i className="signin"></i> SignIn</a>
               
                {/* <a href="#"><i className="signin"></i> SignUp</a> */}
            </div>
            <div className='d3'>
            <img id="img2" src={Logo2} alt="Loading error"></img>
            </div>
            </div>
        </div>
        <div id='d9'>
        <div id='d7'>
            
            <div id='categery'>
                <div id='h1b'>
                <p id='h1'>Categories</p>
                </div>
                <p>Home Appliances</p>
                <p>Grocery</p>
                <p>Toys</p>
                <p>perfumes</p>
                <p>electronic gadgets</p>

            </div>
            <div>
            <img id='img3' src={Logo3} alt="Loading error"></img>
            </div>

            
        </div>
        </div>
        </div>        
 

        </>
    );


}

export default Mart;