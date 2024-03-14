import styles from "./Cards.module.css";
import Card from "../Card";
import { useProductsContext } from "../../context/Product";
import notFound from "../../assets/not-found.png";

export default function Cards() {
  const { products } = useProductsContext();

  function NotFound() {
    return <img className={styles.notFound} src={notFound} alt="NotFound" />;
  }
  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
}
