import styles from "./Banner.module.css";
import logo from "../../assets/logo.png";

export default function Banner({ handlerSearch }) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Logo" />

      
        <div className={styles.container_input}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => handlerSearch(e.target.value)}
            placeholder="Pesquisa"
          />
        </div>

        {/* <div className={styles.container_filter}>
          <p>Filtrar por:</p>
          <a onClick={''}>Nome</a>
          <a onClick={''}>Preço</a>
      </div> */}
    </div>
  );
}
