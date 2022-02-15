import styled from 'styled-components';

import { FormPage } from './form/form-page';

const ContainerStyled = styled.div`
    margin: 20px;
`;

const NavigationStyled = styled.div`
    display: flex;
    height: 2.5rem;
    background-color: #012F6D;
`;

const HomeButtonStyled = styled.button`
    background-color: #C5103D;
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
        content: '';
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

const App = () => {
    return (
        <ContainerStyled>
            <NavigationStyled>
                <HomeButtonStyled>HOME</HomeButtonStyled>
                <DegreeProgramButtonStyled>DEGREE PROGRAMS</DegreeProgramButtonStyled>
            </NavigationStyled>
            <FormPage />
        </ContainerStyled>
    );
}

export default App;
