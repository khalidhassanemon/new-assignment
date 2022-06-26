import React from 'react';
import logo from '../../../src/Images/mern.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
              <img src={logo} alt=""/>  
        <nav>
               <a className='first' href='/nodejs'>Nodejs</a>
               <a href='/jabascript'>Jabascript</a>  
               <a href='/react'>React</a>          
               <a href='/mern'>Mern</a>  
        </nav>  

        </div>
    
    );
};

export default Header;
