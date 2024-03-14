import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(data);
  const [name, setName] = useState(true);
  const [price, setPrice] = useState(true);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, name, setName, price, setPrice }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const { products, setProducts, name, setName, price, setPrice } =
    useContext(ProductsContext);

    function searchProduct(value) {
      const filterData = data.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filterData);
    }

    function orderBy(value) {
      let filterOrder;
      if (value.toLowerCase() === "name"){
        filterOrder = data.sort((a, b) => 
        name 
          ?
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          :
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
        );
        setName(!name);
      }

      if (value.toLowerCase() === "price"){
        filterOrder = data.sort((a, b) => 
        price 
          ?
            a.price > b.price ? -1 : a.price < b.price ? 1 : 0
          :
            a.price < b.price ? -1 : a.price > b.price ? 1 : 0
        );
        setPrice(!price);
      }
      setProducts(filterOrder);
    }

    return {
      products,
      setProducts,
      name, 
      price,
      searchProduct,
      orderBy
    };
}
