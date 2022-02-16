import styled from "styled-components";

import { FormPage } from "./form/form-page";
import { Body } from "./body/body";

const ContainerStyled = styled.div`
  margin: 20px;
`;

const NavigationStyled = styled.div`
  display: flex;
  height: 2.5rem;
  background-color: #012f6d;
  border-top: 2px solid red;
`;

const HomeButtonStyled = styled.button`
  background-color: #c5103d;
  color: white;
  border: none;
  outline: none;
  height: 100%;
  margin-left: 20%;
`;

const DegreeProgramButtonStyled = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    margin-top: -4px;
    transform: rotate(45deg);
    right: -6px;
    top: 50%;
    height: 4px;
    width: 4px;
  }
`;

const HeaderStyled = styled.header`
  display: flex;
  margin: 0.2rem 0;
  height: 3rem;
`;

const HeaderContent = styled.h4`
  color: #012f6d;
  margin: 0;
  line-height: 3rem;
  text-align: center;
  width: 50%;
`;

const FooterStyled = styled.footer`
  display: flex;
  margin: 3rem 0;
  min-height: 3rem;
  background-color: #012f6d;
`;

const FooterContent = styled.div`
  color: white;
  line-height: 3rem;
  text-align: center;
  flex: 1;
`;

const ButtonTopStyled = styled.button`
  border: none;
  outline: none;
  height: 2.8rem;
  width: 3.4rem;
  color: white;
  margin-left: 0.5rem;
  background-color: #01224f;
  cursor: pointer;
  word-wrap: break-word;
`;

const App = () => {
  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ContainerStyled>
      <HeaderStyled>
        <HeaderContent>University of Houston-Downtown</HeaderContent>
        <HeaderContent>
          Call 713-221-8522 to speak to an admission councellor
        </HeaderContent>
      </HeaderStyled>
      <NavigationStyled>
        <HomeButtonStyled>HOME</HomeButtonStyled>
        <DegreeProgramButtonStyled>DEGREE PROGRAMS</DegreeProgramButtonStyled>
      </NavigationStyled>
      <FormPage />
      <Body />
      <FooterStyled>
        <FooterContent>
          <span>University of Huston-Downtown</span>
        </FooterContent>
        <FooterContent>
          <span>Home | Degree Programs</span>
          <ButtonTopStyled onClick={handleOnClick}>Top</ButtonTopStyled>
        </FooterContent>
      </FooterStyled>
    </ContainerStyled>
  );
};

export default App;
