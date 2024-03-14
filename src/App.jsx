import Home from "./components/Home";
import { ProductsProvider } from "./context/Product";

function App() {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  );
}

export default App;
