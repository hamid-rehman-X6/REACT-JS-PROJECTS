import { useEffect, useState } from "react";
import "./style.css";

export default function LoadProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.error("Error fetching products", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  if (loading) {
    return <div>Laoding Products...</div>;
  }

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="main-container">
        <div className="image-Container">
          {products && products.length
            ? products.map((items) => (
                <div className="products" key={items.id}>
                  <img
                    className="img"
                    src={items.thumbnail}
                    alt={items.title}
                  />
                  <p>{items.title}</p>
                </div>
              ))
            : null}
        </div>

        <button
          disabled={disableBtn}
          onClick={handleLoadMore}
          className="load-btn"
        >
          Load More Products
        </button>

        {disableBtn ? <p>You reached the max products.</p> : null}
      </div>
    </>
  );
}
