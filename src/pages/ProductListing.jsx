import React from 'react'
import ProductCard from '../Components/ProductCard'
import '../styles/styles.css'
const ProductListing = ({ products, addToCart, cartItems }) => {
    const inCart = (product) => cartItems.some((item) => item.id === product.id);
    return (
        <div className="product-listing">
            <h2>Our Plants</h2>
            <div className="product-section">
                <h3>Aromatic Plants</h3>
                <div className="product-grid">
                    {products.filter(p => p.category === 'Aromatic').map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} inCart={inCart(product)} />
                    ))}
                </div>
            </div>
            <div className="product-section">
                <h3>Medicinal Plants</h3>
                <div className="product-grid">
                    {products.filter(p => p.category === 'Medicinal').map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} inCart={inCart(product)} />
                    ))}
                </div>
            </div>
            <div className="product-section">
                <h3>Ornamental Plants</h3>
                <div className="product-grid">
                    {products.filter(p => p.category === 'Ornamental').map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} inCart={inCart(product)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductListing