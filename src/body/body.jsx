import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { Categories } from "../categories/categories";

const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10%;
`;
const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
`;

const BodyContent = styled.div`
  width: 50%;
  font-size: 12px;
`;

const SubBodyContainer = styled.div`
  margin-top: 5%;
  font-size: 12px;
  color: grey;
`;

const HeadingStyled = styled.h2`
  margin: 0;
`;

export const Body = () => {
  const [bodyData, setBodyData] = useState();
  const [categoriesData, setCategoriesData] = useState();

  const fetchBodyData = useCallback(async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/86344593-32e6-4525-a225-1f0df23dd90d"
    );
    const data = await response.json();
    setBodyData(data);
  }, []);

  const fetchCategoriesData = useCallback(async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/39dd1782-ae4b-4cf8-8e18-a1dea3c8a920"
    );
    const data = await response.json();
    setCategoriesData(data.categories);
  }, []);

  useEffect(() => {
    fetchCategoriesData();
    fetchBodyData();
  }, [fetchCategoriesData, fetchBodyData]);

  return (
    <BodyStyled>
      <BodyContainer>
        {bodyData && (
          <BodyContent>
            <HeadingStyled style={{ color: "#012F6D" }}>
              {bodyData.title}
            </HeadingStyled>
            <>
              {bodyData.body.split("\n").map((text) => {
                return (
                  text && (
                    <p key={text} style={{ color: "grey" }}>
                      {text}
                    </p>
                  )
                );
              })}
            </>
          </BodyContent>
        )}
        {bodyData && (
          <BodyContent
            style={{
              backgroundImage:
                'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/600px-Image_created_with_a_mobile_phone.png")'
            }}
          ></BodyContent>
        )}
      </BodyContainer>
      <div>
        {bodyData && (
          <SubBodyContainer>
            <HeadingStyled style={{ color: "#012F6D" }}>
              {bodyData.sub_title}
            </HeadingStyled>
            <p style={{ color: "grey" }}>{bodyData.sub_body}</p>
          </SubBodyContainer>
        )}
      </div>
      <Categories categoriesData={categoriesData} />
    </BodyStyled>
  );
};
