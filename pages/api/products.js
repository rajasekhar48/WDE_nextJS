// pages/api/products.js
import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    } else if (req.method === 'POST') {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Error creating product', error });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
