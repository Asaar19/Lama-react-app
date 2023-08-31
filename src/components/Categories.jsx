import { categories } from "../Data";
import styled from "styled-components";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;


const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item}/>
        ))}
      </Container>
    </>
  );
};

export default Categories;
