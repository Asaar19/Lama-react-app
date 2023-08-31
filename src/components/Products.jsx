import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../Data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, id) => (
        <Product item={item} key={id} />
      ))}
    </Container>
  );
};

export default Products;
