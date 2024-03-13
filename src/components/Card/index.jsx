import styles from './Card.module.css';

export default function Card({ product }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{product.name}</p>
      <img className={styles.image} src={product.image} />
      <p className={styles.price}>R$ {product.price}</p>
      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
