import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import Delete from '../../images/icon-delete.svg';
import './NavBar.css';
import { AppContext } from '../../AppContext';
import React, {useContext} from 'react';

export default function NavBar(props) {
    const {quantity} = useContext(AppContext);

    const {cartItems} = props;
    const showCart = () => {
        let cart = document.getElementById('empty');
        cart.classList.toggle('show');
    }

    return (
        <navbar className="navbar">
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
                <span className="cart-icon" onClick={() => showCart()}>
                    <img src={Cart} alt="Cart Icon"/>
                    <span className="cart-badge">{quantity}</span>
                </span>
                
                <div>
                    <img className="avatar" src={Avatar} alt="Avatar"/>
                </div>
            </div>

            {cartItems ? (
                <div id="cart" className="cart-items">
                    <p className="title bold">Cart</p>
                    <hr style={{opacity: 0.3}}/>
                    <div className="item-details cart-content">
                        <img className="thumbnail" src={Product1Thumbnail} alt="Product 1 Thumbnail"/>
                        <div className="details-text">
                            <div>Fall Limited Edition Sneakers</div>
                            <div>$125.00 x 3 <span className="bold">$375.00</span></div>
                        </div>
                        <img src={Delete} alt="Delete Button"/>
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            ) : (
                <div id="empty" className="cart-items">
                    <p className="title bold">Cart</p>
                    <hr style={{opacity: 0.3}}/>
                    <p className="empty-content">Your cart is empty.</p>
                </div>
            )}
            <hr className="navbar-hr"/>
        </navbar>
    )
}
