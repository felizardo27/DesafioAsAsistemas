import Banner from "../Banner";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Cards />
    </div>
  );
}
