import React from "react";
import fs from "fs/promises"; //nodejs library. not a 3rd party library. so we dont need to install it
import path from "path"; //nodejs library. not a 3rd party library. so we dont need to install it

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
  const pathName = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(pathName);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}

export default Home;
