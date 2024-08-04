import React from 'react'
import CartItem from '../Components/CartItem';
import '../styles/styles.css'

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                ))}
            </div>
            <div className="cart-summary">
                <p>Total Plants: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                <p>Total Cost: ${totalCost.toFixed(2)}</p>
                <div className="cart-buttons">
                    <button className="continue-shopping" onClick={() => window.history.back()}>Continue Shopping</button>
                    <button className="checkout" onClick={() => alert('Coming Soon')}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage