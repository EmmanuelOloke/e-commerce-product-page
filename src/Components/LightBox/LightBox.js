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
import IconMinus from '../../images/icon-minus.svg';
import IconPlus from '../../images/icon-plus.svg';
import IconPrevious from '../../images/icon-previous.svg';
import IconNext from '../../images/icon-next.svg';
import Cart from '../../images/icon-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import './LightBox.css';


export default function Lightbox() {
    const {quantity, setQuantity} = useContext(AppContext);

    const unit = 125.00;
    let qty = quantity;
    let totalPrice = unit;
    
    const calculatePrice = (unit, qty) => {
        if (qty === 0){
            return;
        }
        totalPrice = unit * qty;
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
        setQuantity(qty);
    }

    const productImages = [Product1, Product2, Product3, Product4];
    const [productImage, setProductImage] = useState(productImages[0]);
    
    const modalImages = [Product1, Product2, Product3, Product4];
    const [modalImage, setModalImage] = useState(modalImages[0]);

    const openLightbox = () => {
        document.getElementById("lightboxModal").style.display = "flex";
    }
    
    const closeLightbox = () => {
        document.getElementById("lightboxModal").style.display = "none";
    }
    
    
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
                <img id="mainImage" className="lightbox-main-image" src={productImage} alt="main product" onClick={() => openLightbox()}/>

                <div id="lightbox-thumbnails">
                    <span className={productImages.indexOf(productImage) === 0 ? "thumbnail-div" : ''}>
                        <img className={`lightbox-thumbnails-img ${productImages.indexOf(productImage) === 0 ? ' active' : ''}`} id="product1" src={Product1Thumbnail} alt="product 1 thumbnail" onClick={() => setProductImage(productImages[0])}/>
                    </span>
                    
                    <span className={productImages.indexOf(productImage) === 1 ? "thumbnail-div" : ''}>
                        <img className={`lightbox-thumbnails-img ${productImages.indexOf(productImage) === 1 ? ' active' : ''}`} id="product2" src={Product2Thumbnail} alt="product 2 thumbnail" onClick={() => setProductImage(productImages[1])}/>
                    </span>
                    
                    <span className={productImages.indexOf(productImage) === 2 ? "thumbnail-div" : ''}>
                        <img className={`lightbox-thumbnails-img ${productImages.indexOf(productImage) === 2 ? ' active' : ''}`} id="product3" src={Product3Thumbnail} alt="product 3 thumbnail" onClick={() => setProductImage(productImages[2])}/>
                    </span>
                    
                    <span className={productImages.indexOf(productImage) === 3 ? "thumbnail-div" : ''}>
                        <img className={`lightbox-thumbnails-img ${productImages.indexOf(productImage) === 3 ? ' active' : ''}`} id="product4" src={Product4Thumbnail} alt="product 4 thumbnail" onClick={() => setProductImage(productImages[3])}/>
                    </span>
                </div>
            </div>

            <div className="lightbox-txt">
                <p className="lightbox-txt-title">SNEAKER COMPANY</p>
                <p className="lightbox-txt-fall">Fall Limited Edition Sneakers</p>
                <p className="lightbox-txt-desc">These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="prices">
                    <div className="prices-flex">
                        <span className="price">$125.00</span> 
                        <span className="price-off">50%</span>
                    </div>
                    <p className="price-before">$250.00</p>
                </div>

                <div className="button-items">
                    <div className="item-count">
                        <img src={IconMinus} alt="remove product" onClick={removeItem}/>
                        <span id="qty">{quantity}</span>
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
                    <FontAwesomeIcon className="close" icon={faXmark} alt="Close Modal" onClick={() => closeLightbox()}/>

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