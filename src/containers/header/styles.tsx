import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`;
