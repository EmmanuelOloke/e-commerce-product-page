import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import Avatar from '../../images/image-avatar.png';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import Delete from '../../images/icon-delete.svg';
import './NavBar.css';
import { AppContext } from '../../AppContext';
import React, {useContext} from 'react';

export default function NavBar() {
    const {quantity, setQuantity, price, setPrice} = useContext(AppContext);

    const showCart = () => {
        const filledCart = document.getElementById('filled-cart');
        const emptyCart = document.getElementById('empty-cart');
        if (quantity === 0)
            emptyCart.classList.toggle('show');
        else
            filledCart.classList.toggle('show');
    }

    const noBadge = () => {
        document.getElementById("badge").style.display = "none";
    }

    const removeCartItems = () => {
        setQuantity(0);
        setPrice(125.00.toFixed(2));
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
                    { (quantity === 0) ? 
                            (
                                <span id="badge" className="cart-badge">{quantity}</span>
                                ,() => noBadge
                         )
                        : (
                            <span id="badge" className="cart-badge">{quantity}</span>
                        )
                    }
                </span>
                
                <div>
                    <img className="avatar" src={Avatar} alt="Avatar"/>
                </div>

                { (quantity > 0) ? (
                    <div id="filled-cart" className="cart-items">
                        <p className="title bold">Cart</p>
                        <hr style={{opacity: 0.3}}/>
                        <div className="item-details cart-content">
                            <img className="thumbnail" src={Product1Thumbnail} alt="Product 1 Thumbnail"/>
                            <div className="details-text">
                                <div>Fall Limited Edition Sneakers</div>
                                <div>$125.00 x {quantity} <span className="bold">{`$${price}`}</span></div>
                            </div>
                            <img className="remove-items" src={Delete} alt="Delete Button" onClick={() => removeCartItems()}/>
                        </div>
                        <button className="checkout">Checkout</button>
                    </div>
                ) : (
                    <div id="empty-cart" className="cart-items">
                        <p className="title bold">Cart</p>
                        <hr style={{opacity: 0.3}}/>
                        <p className="empty-content">Your cart is empty.</p>
                    </div>
                )}
            </div>

            <hr className="navbar-hr"/>
        </navbar>
    )
}
