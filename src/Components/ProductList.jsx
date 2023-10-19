import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./productlist.css";
import { Link } from "react-router-dom";

export default function ProductList() {
  let [products, setProducts] = useState(null);

  const geProductList = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    geProductList();
  }, []);

  return (
    <>
      {products === null ? (
        <p>loading ...</p>
      ) : (
        <div className="d-flex flex-wrap align-items-center">
          {products.map((product) => (
            <Card key={product.id} style={{ width: "18rem" }} className="m-2">
              <figure className="cardImg_container">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={product.image}
                />
              </figure>
              <Card.Body>
                <Card.Title className="card_Title">{product.title}</Card.Title>
                <Card.Text className="card_Desc">
                  {product.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{product.category}</ListGroup.Item>
                <ListGroup.Item>${product.price}</ListGroup.Item>
                <ListGroup.Item>Rating: {product.rating.rate}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link>
                  <Link to={`/product-details/${product.id}`}>
                    View Details
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
