import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useReducer, useContext } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../util";
import { Store } from "../store";

const reducer = (state, action) => {
  //recuder accepts two parameter, state - current state is accepted which is initialized as [] in the homescreen function with error and loading, action
  switch (action.type) {
    case "FETCH_REQUEST": //when we send ajax request to backend
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams(); //react hook useParams() from react router dom
  const { slug } = params; //getting data.slug from param

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [], //product as we gonnashow only one product not all of them
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/products/slug/${slug}`
        );
        console.log(`RESULT : ${JSON.stringify(result.data)}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        // dispatch({ type: "FETCH_FAIL", payload: err.message });
        dispatch({ type: "FETCH_FAIL", payload: getError(err) }); //err message in payload is received from server.js
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxtDispatch } = useContext(Store); //renaming dispatch with ctxtdispatch (i.e., contextDispatch) to distinguish it from dispatch of current component (i.e., in useEffect)
  //to add an item to the cart we need to create and action to dispatch
  const addToCartHandler = () => {
    console.log(product);
    ctxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 }, //concatenating ...product with quantity value
    });
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          {product.image && (
            <img
              className="img-large"
              src={`/${product.image}`}
              alt={product.name}
            />
          )}
          {console.log(`PRODUCT : ${JSON.stringify(product)}`)}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.rating}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:<p>{product.decsription}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
