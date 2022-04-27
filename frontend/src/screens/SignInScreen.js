import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

function SignInScreen() {
  //To get the redirect value from link given in the cartScreen we make use of useLocation
  console.log(useLocation());
  const { search } = useLocation(); // useLocation provides the current url of signin page and we deconstruct search from it
  console.log(search);
  const redirectInUrl = new URLSearchParams(search).get("redirect"); //URLSearchParams helps to get all the paramters stored in search and get will particularly search for a key which is redirect and provides it value as /shipping
  console.log(redirectInUrl);
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SignInScreen;
