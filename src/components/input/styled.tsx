import { StyledFlex } from "../../styles/global";
import styled from "styled-components";

export const StyledUl = styled.ul`
  position: absolute;
  top: 20px;
  z-index: 1;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  list-style: none;
  width: 100%;
  &:hover{
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
position: relative;
`