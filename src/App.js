import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductCardExpanded from "./components/ProductCardExpanded";

function App() {
  const [products, setProducts] = useState([]);
  const [active,setActive] = useState(-1) //active card to be stored in this state variable.

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (response.ok) {
      const jsondata = await response.json();
      setProducts(jsondata.products);
      console.log(jsondata.products);
    } else {
      alert("Error extracting the products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1 className="heading">Products</h1>
      <div className="container">
        {products.map((product,index) => {
          return (
            <ProductCard
              indx= {index}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              discount={product.discountPercentage}
              brand={product.brand}
              setactive = {setActive}
            />
          );
        })}
        {active !== -1 && (
          <ProductCardExpanded title={products[active].title} setactive={setActive} product={products[active]}/>
        )}
      </div>
    </>
  );
}

export default App;
