// components/ProductCard.tsx

import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
  name: string;
  price: number;
  discount: number;
  image: string;
}

export default function ProductCard({ name, price, discount, image }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={styles.price}>${price}</p>
      <p className={styles.discount}>{discount}% off</p>
    </div>
  );
}
