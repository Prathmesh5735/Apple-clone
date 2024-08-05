import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={12}>
              <div className="title-wrapper bold">iPhones</div>
              <div className="brief-description">The best for the brightest.</div>
            </Col>
          </Row>
          {products.length === 0 ? (
            <div>Loading...</div>
          ) : (
            products.map((product, index) => {
              const { id, title, image, description, price } = product;
              const productPage = `/iphone/${id}`;
              const isEven = index % 2 === 0;

              return (
                <Row key={id} className="justify-content-center text-center product-holder h-100 top-100 bottom-100">
                  <Col md={6} className={`my-auto order-${isEven ? 1 : 2}`}>
                    <div className="product-title">{title}</div>
                    <div className="product-brief">{description}</div>
                    <div className="starting-price">{`Starting at $${price}`}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6} className={`order-${isEven ? 2 : 1}`}>
                    <div className="product-image">
                      <img src={image} alt={title} className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              );
            })
          )}
        </Container>
      </section>
    </div>
  );
};

export default Iphone;
