import React, {useContext, useState} from 'react';
import { AppContext } from '../../AppContext';
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


export default function Lightbox() {
    const {quantity, setQuantity, price, setPrice} = useContext(AppContext);

    const unit = 125.00;
    let qty = quantity;
    let totalPrice;
    
    const calculatePrice = (unit, qty) => {
        if (qty === 0){
            totalPrice = unit;
            return;
        }
        totalPrice = unit * qty;
        document.getElementById('total').innerHTML = `$${totalPrice.toFixed(2)}`;
        return totalPrice;
    }
    
    const addItem = () => {
        qty++
        document.getElementById('qty').innerHTML = qty;
        calculatePrice(unit, qty);
    }
    
    const removeItem = () => {
        if (qty < 1){
            return;
        }
        qty--;
        calculatePrice(unit, qty);
        document.getElementById('qty').innerHTML = qty;
    }
    
    const setCartQty = () => {
        setPrice(totalPrice.toFixed(2));
        setQuantity(qty);
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
                thumbs[i].className += " active";
            });
        }
        
        for (let i = 0; i < spanDiv.length; i++) {
            spanDiv[i].addEventListener("click", function() {
                let currentSpan = document.getElementsByClassName("thumbnail-div");
                currentSpan[0].className = currentSpan[0].className.replace("thumbnail-div", "");
                spanDiv[i].className += "thumbnail-div";
            });
        }
    }
    
    const openLightbox = () => {
        document.getElementById("lightboxModal").style.display = "flex";
    }
    
    const closeLightbox = () => {
        document.getElementById("lightboxModal").style.display = "none";
    }
    
    const modalImages = [Product1, Product2, Product3, Product4];
    const [modalImage, setModalImage] = useState(modalImages[0]);
    
    // const switchModalImage = (modalImage) => {
        //     let modalImageSource = document.getElementById('lightboxMainImage').src;
        //     modalImageSource = modalImage;
        //     document.getElementById('lightboxMainImage').src = modalImageSource;
        
        //     let modalThumbsContainer = document.getElementById('modal-lightbox-thumbnails');
        //     let modalThumbs = modalThumbsContainer.getElementsByClassName('modal-thumbnails-img');
        //     let thumbSpan = document.getElementById('modal-lightbox-thumbnails').getElementsByTagName('span');
        
    //     for (let i = 0; i < modalThumbs.length; i++){
    //         modalThumbs[i].addEventListener('click', () => {
    //             let current = document.getElementsByClassName("modal-active");
    //             current[0].className = current[0].className.replace(" modal-active", "");
    //             modalThumbs[i].className += " modal-active";
    //         })
    //     }

    //     for (let i = 0; i < modalThumbs.length; i++){
    //         modalThumbs[i].addEventListener('click', () => {
    //             let current = document.getElementsByClassName("modal-thumbnail-div");
    //             current[0].className = current[0].className.replace("modal-thumbnail-div", "");
    //             thumbSpan[i].className += "modal-thumbnail-div";
    //         })
    //     }
    // }

    
    const nextModalImage = () => {
        modalImages.indexOf(modalImage) > 2 ?
            setModalImage(modalImages[0])
        :
            setModalImage(modalImages[modalImages.indexOf(modalImage) + 1]);
    }

    const prevModalImage = () => {
        modalImages.indexOf(modalImage) < 1 ? 
            setModalImage(modalImages[3])
        :
            setModalImage(modalImages[modalImages.indexOf(modalImage) - 1]);
    }

    return (
        <main className="lightbox-container">
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
                    <span id="total" className="price">{`$${price}`}</span> <span className="price-off">50%</span>
                </div>
                <p className="price-before">$250.00</p>

                <div className="flexItems">
                    <div className="item-count">
                        <img src={IconMinus} alt="remove product" onClick={removeItem}/>
                        <span id="qty" className="item-quantity">{quantity}</span>
                        <img src={IconPlus} alt="add product" onClick={addItem}/>
                    </div>

                    <button className="add-to-cart" onClick={setCartQty}>
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
                        <img id="lightboxMainImage" className="slide-images" src={modalImage} alt="Main product one"/>
                        <img className="main-modal-icon next" src={IconNext} alt="Next Icon" onClick={() => nextModalImage()}/>
                    </div>

                    <div id="modal-lightbox-thumbnails" className="modal-thumbnails">
                        <span id="product1-span" className={modalImages.indexOf(modalImage) === 0 ? "modal-thumbnail-div" : ''}>
                            <img className={`modal-thumbnails-img ${modalImages.indexOf(modalImage) === 0 ? ' modal-active' : ''}`} id="modal-product1" src={Product1Thumbnail} alt="product 1 thumbnail" onClick={() => {setModalImage(modalImages[0])}}/>
                        </span>
                            
                        <span id="product2-span" className={modalImages.indexOf(modalImage) === 1 ? "modal-thumbnail-div" : ''}>
                            <img className={`modal-thumbnails-img ${modalImages.indexOf(modalImage) === 1 ? ' modal-active' : ''}`} id="modal-product2" src={Product2Thumbnail} alt="product 2 thumbnail" onClick={() => {setModalImage(modalImages[1])}}/>
                        </span>
                            
                        <span id="product3-span" className={modalImages.indexOf(modalImage) === 2 ? "modal-thumbnail-div" : ''}>
                            <img className={`modal-thumbnails-img ${modalImages.indexOf(modalImage) === 2 ? ' modal-active' : ''}`} id="modal-product3" src={Product3Thumbnail} alt="product 3 thumbnail" onClick={() => {setModalImage(modalImages[2])}}/>
                        </span>
                            
                        <span id="product4-span" className={modalImages.indexOf(modalImage) === 3 ? "modal-thumbnail-div" : ''}>
                            <img className={`modal-thumbnails-img ${modalImages.indexOf(modalImage) === 3 ? ' modal-active' : ''}`} id="modal-product4" src={Product4Thumbnail} alt="product 4 thumbnail" onClick={() => {setModalImage(modalImages[3])}}/>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}