// pages/addProduct.js
import { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, description }),
        });

        if (res.ok) {
            const newProduct = await res.json();
            console.log('Product created:', newProduct);
        } else {
            console.error('Error creating product:', res.statusText);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
