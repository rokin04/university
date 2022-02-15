import styled from "styled-components";

import { Input } from "./input";

const RequestInformationContainer = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 0;
`;

const RequestInformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  width: 30%;
  margin-right: 12%;
`;

const RequestInformationHeaderStyled = styled.p`
  text-align: center;
  padding: 0.6rem 0;
  margin: 0;
  background-color: #012f6d;
  color: white;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
`;

const FormInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #7e9fcb;
  padding-top: 1rem;
`;

const SubmitButtonSTyled = styled.button`
  background-color: #c5103d;
  width: 83%;
  height: 2.5rem;
  color: white;
  font-weight: bold;
  margin-bottom: 0.8rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
  overflow: hidden;
`;

export const FormPage = () => (
  <RequestInformationContainer>
    <RequestInformationStyled>
      <RequestInformationHeaderStyled>
        REQUEST INFORMATION
      </RequestInformationHeaderStyled>
      <FormInputContainer>
        <Input placeholder="First-name" required aria-label="first-name" />
        <Input placeholder="Last-name" required aria-label="last-name" />
        <Input placeholder="Email" required aria-label="email" />
        <Input placeholder="Phone Number" required aria-label="phone" />
        <Input
          placeholder="Program"
          required
          option={[1, 2, 3]}
          isDropdown={true}
          aria-label="Program"
        />
        <Input isDropdown={true} aria-label="delivery" />
        <Input isDropdown={true} aria-label="communication" />
        <SubmitButtonSTyled>LEARN MORE TODAY!</SubmitButtonSTyled>
      </FormInputContainer>
    </RequestInformationStyled>
  </RequestInformationContainer>
);
