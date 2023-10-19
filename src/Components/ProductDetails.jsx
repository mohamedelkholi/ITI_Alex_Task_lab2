import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  let [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <>
      {product === null ? (
        <p>loading ...</p>
      ) : (
        <div className="product d-flex" key={product.id}>
          <figure>
            <img src={product.image} />
          </figure>
          <div className="product_Desc">
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
            <p>Prise ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        </div>
      )}
    </>
  );
}
