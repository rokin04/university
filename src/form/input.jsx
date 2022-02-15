import styled from "styled-components";

const FormInputStyled = styled.input`
  background-color: white;
  align-items: center;
  width: 80%;
  margin-bottom: 1rem;
  height: 1.8rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
  overflow: hidden;
  padding-left: 0.5rem;
`;

const DropdownStyled = styled.select`
  background-color: white;
  align-items: center;
  width: 83%;
  margin-bottom: 1rem;
  height: 2rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
  padding-left: 0.5rem;
`;

export const Input = (props) => {
  const { isDropdown, required, option, placeholder, ...restProps } = props;
  const isRequiredField = required ? `${placeholder}*` : placeholder;
  return (
    <>
      {!isDropdown ? (
        <FormInputStyled placeholder={isRequiredField} {...restProps} />
      ) : (
        <DropdownStyled>
          <option style={{ color: `gray` }} defaultValue="program" disabled>
            {isRequiredField}
          </option>
          {option &&
            option.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
        </DropdownStyled>
      )}
    </>
  );
};
