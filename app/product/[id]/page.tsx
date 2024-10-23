// app/product/[id]/page.tsx

import ReviewForm from '../../components/ReviewForm';
import ReviewList from '../../components/ReviewList';

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;

  return (
    <div>
      <h1>Product {productId}</h1>
      <ReviewForm productId={productId} />
      <ReviewList productId={productId} />
    </div>
  );
}
