import React from "react";

const Home = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 1, title: "Product 1" }],
    },
  };
}

export default Home;
