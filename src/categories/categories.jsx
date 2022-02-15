import styled from "styled-components";
import { useState } from "react";

import { CategoryButton } from "./category-button";
import { CategoryContent } from "./categories-details";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const Categories = ({ categoriesData }) => {
  const [selectedId, setSelectedId] = useState(false);

  const handleOnClick = (e) => {
    setSelectedId(e.target.id);
  };

  return (
    <>
      <CategoriesContainer>
        {categoriesData &&
          categoriesData.map((category) => {
            return (
              <CategoryButton
                selectedId={selectedId}
                onClick={handleOnClick}
                id={category.title}
                key={category.title}
              >
                {category.title}
              </CategoryButton>
            );
          })}
      </CategoriesContainer>
      <CategoryContent selectedId={selectedId} categories={categoriesData} />
    </>
  );
};
