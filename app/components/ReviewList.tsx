// components/ReviewList.tsx

import { useEffect, useState } from 'react';

export default function ReviewList({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(`/api/reviews?productId=${productId}`);
      const data = await res.json();
      setReviews(data);
    }

    fetchReviews();
  }, [productId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.reviewer}</strong> ({review.rating}/5)</p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
