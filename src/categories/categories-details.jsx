import { Fragment } from "react";
import styled from "styled-components";

const CategoryDetailsStyled = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const HeaderStyled = styled.div`
  position: relative;
  height: 3rem;
  border: none;
  outline: none;
  background-color: #84a4d0;
  text-align: center;
  line-height: 3rem;
  width: 100%;
  color: white;
  &:after {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    bottom: -5px;
    right: 50%;
    background-color: #84a4d0;
  }
`;

const ContentDetails = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const CategoryContent = ({ selectedId, categories }) => {
  return (
    <CategoryDetailsStyled>
      {categories &&
        categories.map((value) => {
          if (value.title === selectedId) {
            return value.section.map((option, i) => {
              return (
                <Fragment key={option.name}>
                  <div>
                    <HeaderStyled>
                      {i === 1 && <strong>WHY CHOOSE UHD?</strong>}
                    </HeaderStyled>
                    <ContentDetails>
                      <strong style={{ color: "#84a4d0" }}>
                        {option.name}
                      </strong>
                      <p>{option.desc}</p>
                    </ContentDetails>
                  </div>
                </Fragment>
              );
            });
          } else {
            return null;
          }
        })}
    </CategoryDetailsStyled>
  );
};
