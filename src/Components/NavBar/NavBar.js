import React from 'react';
import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import './NavBar.css';

function NavBar() {
    return (
        <div className="">
            <div className="navbar">
                <div className="navbar-left">
                    <div className="navbar">
                        <img src={Logo} alt="logo"/>
                    </div>

                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <div className="navbar">
                        <img src={Cart} alt="Cart"/>
                    </div>
                
                    <div>
                        <img className="avatar" style={{width: '50px'}} src={Avatar} alt="Avatar"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default NavBar
