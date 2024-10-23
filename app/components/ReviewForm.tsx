// components/ReviewForm.tsx

import { useState } from 'react';

export default function ReviewForm({ productId }: { productId: string }) {
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        reviewer,
        rating: parseInt(rating),
        comment,
      }),
    });

    if (res.ok) {
      alert('Review submitted successfully');
      setReviewer('');
      setRating('');
      setComment('');
    } else {
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="reviewer">Name:</label>
        <input
          type="text"
          id="reviewer"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}
