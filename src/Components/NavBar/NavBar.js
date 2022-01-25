import React from 'react';
import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import Delete from '../../images/icon-delete.svg';
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
                <span className="cart-icon">
                    <img src={Cart} alt="Cart Icon"/>
                    <span className="cart-badge">5</span>
                </span>
                
                <div>
                    <img className="avatar" src={Avatar} alt="Avatar"/>
                </div>
            </div>

            <div className="cart-items">
                <p className="cart-content">Cart</p>
                <hr style={{opacity: 0.3}}/>
                <div className="item-details cart-content">
                    <img className="thumbnail" src={Product1Thumbnail} alt="Product 1 Thumbnail"/>
                    <div className="details-text">
                        <div>Fall Limited Edition Sneakers</div>
                        <div>$125.00 x 3 <span className="cart-total">$375.00</span></div>
                    </div>
                    <img src={Delete} alt="Delete Button"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
