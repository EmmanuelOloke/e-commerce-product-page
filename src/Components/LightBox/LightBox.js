import React from 'react';
import Product1 from '../../images/image-product-1.jpg';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
// import Product2 from '../../images/image-product-2.jpg';
import Product2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
// import Product3 from '../../images/image-product-3.jpg';
import Product3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
// import Product4 from '../../images/image-product-4.jpg';
import Product4Thumbnail from '../../images/image-product-4-thumbnail.jpg';
import IconMinus from '../../images/icon-minus.svg';
import IconPlus from '../../images/icon-plus.svg';
import Cart from '../../images/icon-cart.svg';
import './LightBox.css';

function LightBox() {
    let qty = 0;
    let unit = 125.00;
    const addItem = () => {
        qty++;
        document.getElementById('qty').innerHTML = qty;
        price(unit, qty);
    }

    const remItem = () => {
        if (qty >= 1){
            qty--;
        }
        document.getElementById('qty').innerHTML = qty;
        price(unit, qty);
    }

    const price = (unit, qty) => {
        if (qty === 0){
            document.getElementById('total').innerHTML = "$125.00";
        }
        let totalPrice = "$" + unit * qty;
        document.getElementById('total').innerHTML = totalPrice + ".00";
        return totalPrice;
    }

    return (
        <div className="lightbox-container">
            <div className="lightbox-images">
                <img className="lightbox-main-image" src={Product1} alt="main product"/>

                <div className="lightbox-thumbnails">
                    <img src={Product1Thumbnail} alt="product 1 thumbnail"/>
                    <img src={Product2Thumbnail} alt="product 2 thumbnail"/>
                    <img src={Product3Thumbnail} alt="product 3 thumbnail"/>
                    <img src={Product4Thumbnail} alt="product 4 thumbnail"/>
                </div>
            </div>

            <div className="lightbox-txt">
                <p className="lightbox-txt-title">SNEAKER COMPANY</p>
                <p className="lightbox-txt-fall">Fall Limited Edition Sneakers</p>
                <p className="lightbox-txt-desc">These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="flexItems">
                    <span id="total" className="price">$125.00</span> <span className="price-off">50%</span>
                </div>
                <p className="price-before">$250.00</p>

                <div className="flexItems">
                    <div className="item-count">
                        <img src={IconMinus} alt="remove product" onClick={remItem}/>
                        <span id="qty">0</span>
                        <img src={IconPlus} alt="add product" onClick={addItem}/>
                    </div>

                    <button className="add-to-cart">
                        <img src={Cart} alt="cart icon" style={{color: 'red'}}/>
                        Add to cart
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default LightBox;