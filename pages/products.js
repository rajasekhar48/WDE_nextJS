// pages/products.js
import React, { useEffect, useState } from 'react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="products-container">
            {products.map(product => (
                <div className="product-card" key={product._id}>
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;
