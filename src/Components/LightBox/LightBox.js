import React from 'react';
import Product1 from '../../images/image-product-1.jpg';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import Product2 from '../../images/image-product-2.jpg';
import Product2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
import Product3 from '../../images/image-product-3.jpg';
import Product3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
import Product4 from '../../images/image-product-4.jpg';
import Product4Thumbnail from '../../images/image-product-4-thumbnail.jpg';
import IconClose from '../../images/icon-close.svg';
import IconMinus from '../../images/icon-minus.svg';
import IconPlus from '../../images/icon-plus.svg';
import IconPrevious from '../../images/icon-previous.svg';
import IconNext from '../../images/icon-next.svg';
import Cart from '../../images/icon-cart.svg';
import './LightBox.css';
// import NavBar from '../NavBar/NavBar';
function Lightbox() {
    let qty = 0;
    let unit = 125.00;
    const addItem = () => {
        qty++;
        document.getElementById('qty').innerHTML = qty;
        price(unit, qty);
    }

    const removeItem = () => {
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

    // const addToCart = () => {
    //     document.getElementById('qty').innerHTML = qty;
    // }

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

    const openLightbox = () => {
        document.getElementById("lightboxModal").style.display = "flex";
    }

    const closeLightbox = () => {
        document.getElementById("lightboxModal").style.display = "none";
    }

    const switchModalImage = (modalImage) => {
        let modalImageSource = document.getElementById('lightboxMainImage').src;
        modalImageSource = modalImage;
        document.getElementById('lightboxMainImage').src = modalImageSource;
    }

    let imageCount = 0;
    const modalImages = [Product1, Product2, Product3, Product4];

    const nextModalImage = () => {
        imageCount++;

        if (imageCount > 3) {
            imageCount = 0;
        }

        let modalImage = modalImages[imageCount];
        
        document.getElementById('lightboxMainImage').src = modalImage;
    }

    const prevModalImage = () => {
        imageCount--;

        if (imageCount < 0) {
            imageCount = 3;
        }

        let modalImage = modalImages[imageCount];

        document.getElementById('lightboxMainImage').src = modalImage;
    }

    return (
        <div className="lightbox-container">
            <div className="lightbox-images">
                <img id="mainImage" className="lightbox-main-image" src={Product1} alt="main product" onClick={() => openLightbox()}/>

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
                        <img src={IconMinus} alt="remove product" onClick={removeItem}/>
                        <span id="qty" className="item-quantity">0</span>
                        <img src={IconPlus} alt="add product" onClick={addItem}/>
                    </div>

                    <button className="add-to-cart">
                        <img src={Cart} alt="cart icon" style={{color: 'red'}}/>
                        Add to cart
                    </button>
                </div>
            </div>

            <div id="lightboxModal" className="modal">
                <div className="modal-content">
                    <img className="close" src={IconClose} alt="Close Lightbox" onClick={() => closeLightbox()}/>

                    <div className="main-modal">
                        <img className="main-modal-icon prev" src={IconPrevious} alt="Previous Icon" onClick={() => prevModalImage()}/>
                        <img id="lightboxMainImage" className="slide-images" src={Product1} alt="Main product one"/>
                        <img className="main-modal-icon next" src={IconNext} alt="Next Icon" onClick={() => nextModalImage()}/>
                    </div>

                    <div id="lightbox-thumbnails" className="modal-thumnails">
                        <span className="thumbnail-div">
                            <img className="modal-thumbnails-img active" id="product1" src={Product1Thumbnail} alt="product 1 thumbnail" onClick={() => switchModalImage(Product1)}/>
                        </span>
                            
                        <span>
                            <img className="modal-thumbnails-img" id="product2" src={Product2Thumbnail} alt="product 2 thumbnail" onClick={() => switchModalImage(Product2)}/>
                        </span>
                            
                        <span>
                            <img className="modal-thumbnails-img" id="product3" src={Product3Thumbnail} alt="product 3 thumbnail" onClick={() => switchModalImage(Product3)}/>
                        </span>
                            
                        <span>
                            <img className="modal-thumbnails-img" id="product4" src={Product4Thumbnail} alt="product 4 thumbnail" onClick={() => switchModalImage(Product4)}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lightbox;