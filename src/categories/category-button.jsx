import styled from "styled-components";

const CategoriesButtonStyled = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#C60E3B" : "#f1f1f1")};
  border: none;
  outline: none;
  color: ${({ isSelected }) => (isSelected ? "white" : "#012f6d")};
  min-width: 9.9rem;
  height: 2.5rem;
  margin: 0.2rem;
  cursor: pointer;
`;

export const CategoryButton = ({ onClick, id, children, selectedId }) => {
  return (
    <CategoriesButtonStyled
      isSelected={id === selectedId}
      id={id}
      onClick={onClick}
    >
      {children}
    </CategoriesButtonStyled>
  );
};
