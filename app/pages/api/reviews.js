// pages/api/reviews.js

import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('mydatabase'); // Replace 'mydatabase' with your actual DB name

  if (req.method === 'POST') {
    // Add a new review
    const { productId, reviewer, rating, comment } = req.body;

    if (!productId || !reviewer || !rating || !comment) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const result = await db.collection('reviews').insertOne({
      productId,
      reviewer,
      rating,
      comment,
      date: new Date(),
    });

    res.status(201).json(result);
  } else if (req.method === 'GET') {
    // Retrieve reviews for a specific product
    const { productId } = req.query;

    if (!productId) {
      res.status(400).json({ error: 'Missing productId query parameter' });
      return;
    }

    const reviews = await db.collection('reviews').find({ productId }).toArray();
    res.status(200).json(reviews);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
