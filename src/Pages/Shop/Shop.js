import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [nodiProducts, setNodiProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setNodiProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCard = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCard.push(addedProduct);
                }
            }
            setCart(storedCard);
        }
    }, [products]);

    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage
        addToDb(product.key);
    }
    const handleSearch = e => {
        const searchText = e.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setNodiProducts(matchProducts);
    }
    return (
        <>
            <div className='search-container'>
                <input type="text"
                    placeholder='search'
                    onChange={handleSearch}
                />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    <h3>Products:{nodiProducts.length}</h3>
                    {
                        nodiProducts.map(product => <Products
                            key={product.key}
                            product={product}
                            handleToCart={handleToCart}
                        >
                        </Products>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;