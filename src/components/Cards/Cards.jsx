import styles from "./Cards.module.css";
import Card from "../Card";

export default function Cards({ data }) {
  
  return (
    <div className={styles.container}>
      {data.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
