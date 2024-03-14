import styles from "./Banner.module.css";
import logo from "../../assets/logo.png";
import { useProductsContext } from "../../context/Product";

export default function Banner() {
  const { searchProduct, orderBy, name, price } = useProductsContext();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Logo" />

      <div className={styles.container_input}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => searchProduct(e.target.value)}
          placeholder="Pesquisa"
        />
      </div>

      <div className={styles.container_filter}>
        <p>Filtrar por:</p>
        <a onClick={() => orderBy("name")}>Nome {!name ? "↑" : "↓"}</a>
        <a onClick={() => orderBy("price")}>Preço {!price ? "↑" : "↓"}</a>
      </div>
    </div>
  );
}
