import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
import Rating from 'react-rating';

const Products = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingBasket} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='amar'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - Order</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                >
                </Rating>
                <br />
                <button onClick={() => props.handleToCart(props.product)} className='btn-regular'>{element} Add to Basket</button>
            </div>

        </div>
    );
};

export default Products;