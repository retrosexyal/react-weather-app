import { StyledFlex } from "../../styles/global";
import styled from "styled-components";

export const StyledUl = styled.ul<{isHidden:string}>`
  position: absolute;
  top: 25px;
  z-index: 1;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  list-style: none;
  width: 100%;
  display: ${(props)=> props.isHidden};
  &:hover {
    cursor: pointer;
  }

  li {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    padding-left: 5px;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  color: ${(props) => props.theme.colors.secondary};
  padding: 5px 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
`;
export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 20px;
  user-select: none;
  border: 0;
  &:hover {
    cursor: pointer;
  }
`;
