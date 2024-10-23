// app/shop/page.tsx

import ProductCard from '../components/ProductCard';

export default function Shop() {
  const products = [
    { name: 'Product 1', price: 100, discount: 10, image: '/images/product1.jpg' },
    { name: 'Product 2', price: 200, discount: 20, image: '/images/product2.jpg' },
    { name: 'Product 3', price: 150, discount: 15, image: '/images/product3.jpg' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </div>
  );
}
 