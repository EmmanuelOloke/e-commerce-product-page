import React from 'react';
import Product1 from '../../images/image-product-1.jpg';
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
// import Product2 from '../../images/image-product-2.jpg';
import Product2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
// import Product3 from '../../images/image-product-3.jpg';
import Product3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
// import Product4 from '../../images/image-product-4.jpg';
import Product4Thumbnail from '../../images/image-product-4-thumbnail.jpg';
import './LightBox.css';

function LightBox() {
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
                <p>SNEAKER COMPANY</p>
            </div>
            
        </div>
    )
}

export default LightBox;