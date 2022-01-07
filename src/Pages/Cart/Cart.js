import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const raich of cart) {
        if (!raich.quantity) {
            raich.quantity = 1;
        }
        total = total + raich.price * raich.quantity;
        totalQuantity = totalQuantity + raich.quantity;

    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Orders:{totalQuantity}</h4>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>TAX: {tax}</p>
            <p>Grandtotal: {grandTotal}</p>
        </div>
    );
};

export default Cart;