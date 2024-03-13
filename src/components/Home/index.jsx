import { useState } from "react";
import data from "../../data/data.json";
import Banner from "../Banner";
import Cards from "../Cards/Cards";

export default function Home() {
  const [products, setProducts] = useState(data);

  function handlerSearch(value) {
    const filterData = data.filter((product) =>
      product.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setProducts(filterData);
  }

  return (
    <>
      <Banner handlerSearch={handlerSearch} />
      <Cards data={products} />
    </>
  );
}
