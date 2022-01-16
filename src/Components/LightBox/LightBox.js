import React from 'react';
import Product1 from '../../images/image-product-1.jpg';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import Product2 from '../../images/image-product-2.jpg';
import Product2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
import Product3 from '../../images/image-product-3.jpg';
import Product3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
import Product4 from '../../images/image-product-4.jpg';
import Product4Thumbnail from '../../images/image-product-4-thumbnail.jpg';
import IconMinus from '../../images/icon-minus.svg';
import IconPlus from '../../images/icon-plus.svg';
import Cart from '../../images/icon-cart.svg';
import './LightBox.css';

function Lightbox() {
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
        let totalPrice = "$" + unit * qty;
        if (totalPrice === "$0.00"){
            document.getElementById('total').innerHTML = "$125.00";
        }
        document.getElementById('total').innerHTML = totalPrice + ".00";
        return totalPrice;
    }

    const switchImage = (productImage) => {
        let imgSource = document.getElementById('mainImage').src;
        imgSource = productImage;
        document.getElementById('mainImage').src = imgSource;

        let thumbsContainer = document.getElementById('lightbox-thumbnails');
        let thumbs = thumbsContainer.getElementsByClassName('lightbox-thumbnails-img');
        let spanDiv = document.getElementById('lightbox-thumbnails').getElementsByTagName("span");

        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].addEventListener("click", function() {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        for (let i = 0; i < spanDiv.length; i++) {
            spanDiv[i].addEventListener("click", function() {
                let currentSpan = document.getElementsByClassName("thumbnail-div");
                currentSpan[0].className = currentSpan[0].className.replace("thumbnail-div", "");
                this.className += "thumbnail-div";
            });
        }
    }

    return (
        <div className="lightbox-container">
            <div className="lightbox-images">
                <img id="mainImage" className="lightbox-main-image" src={Product1} alt="main product"/>

                <div id="lightbox-thumbnails">
                    <span className="thumbnail-div">
                        <img className="lightbox-thumbnails-img active" id="product1" src={Product1Thumbnail} alt="product 1 thumbnail" onClick={() => switchImage(Product1)}/>
                    </span>
                    
                    <span>
                        <img className="lightbox-thumbnails-img" id="product2" src={Product2Thumbnail} alt="product 2 thumbnail" onClick={() => switchImage(Product2)}/>
                    </span>
                    
                    <span>
                        <img className="lightbox-thumbnails-img" id="product3" src={Product3Thumbnail} alt="product 3 thumbnail" onClick={() => switchImage(Product3)}/>
                    </span>
                    
                    <span>
                        <img className="lightbox-thumbnails-img" id="product4" src={Product4Thumbnail} alt="product 4 thumbnail" onClick={() => switchImage(Product4)}/>
                    </span>
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
                        <span id="qty" className="item-quantity">0</span>
                        <img src={IconPlus} alt="add product" onClick={addItem}/>
                    </div>

                    <button className="add-to-cart">
                        <img src={Cart} alt="cart icon" style={{color: 'red'}}/>
                        Add to cart
                    </button>
                </div>
            </div>

            <p>Modal will go here</p>
        </div>
    )
}

export default Lightbox;