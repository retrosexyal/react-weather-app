import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 650px) {
    display: none;
  }

`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 550px){
    flex-direction: column;
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`;
