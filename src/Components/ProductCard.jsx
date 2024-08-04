import React from 'react'
import '../styles/styles.css'
const ProductCard = ({ product, addToCart, inCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
                disabled={inCart}
            >
                {inCart ? 'In Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default ProductCard