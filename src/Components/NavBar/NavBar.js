import React from 'react';
import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={Logo} alt="logo"/>

                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>    
                    <li>Contact</li>
                </ul>
            </div>

            <div className="navbar-right">
                <span className="cart">
                    <img src={Cart} alt="Cart Icon"/>
                    <span className="cart-badge">5</span>
                </span>
                
                <div>
                    <img className="avatar" src={Avatar} alt="Avatar"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
