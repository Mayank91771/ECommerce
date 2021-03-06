import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mayank",
      email: "mayank@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jhon",
      email: "Jhon@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "images/shirt2.jpg",
      countInStock: 10,
      price: 48,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Cotton 100%",
    },
    {
      // _id: "2",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "images/pant1.jpg",
      countInStock: 10,
      brand: "Nike",
      price: 20,
      rating: 3.5,
      numReviews: 10,
      description: "Cotton 100%",
    },
    {
      // _id: "3",
      name: "Nike Shirt",
      slug: "nike-shirt",
      category: "Shirts",
      image: "images/shirt2.jpg",
      countInStock: 0,
      price: 45,
      brand: "Nike",
      rating: 0.5,
      numReviews: 10,
      description: "Cotton 100%",
    },
    {
      // _id: "4",
      name: "Adidas Slim Shirt",
      slug: "Adidas-slim-shirt",
      category: "Pants",
      image: "images/pant2.jpg",
      countInStock: 10,
      price: 65,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "Cotton 100%",
    },
  ],
};

export default data;
