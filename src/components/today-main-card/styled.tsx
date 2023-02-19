import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:400px;
  height: 300px;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-radius: ${(props) => props.theme.borderRadius.primary};
  background: ${(props) => props.theme.colors.background};
  user-select: none;
  @media (max-width:860px) {
    width: 50%;
  }
`;

export const StyledWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  @media (max-width:860px) {
    flex-direction:column;
  }
`;

export const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  background: ${(props) => props.theme.colors.background};
`;

export const StyledText = styled.p`
  color: ${(props)=> props.theme.colors.secondary};
  font-size: 25px;
  background: ${(props) => props.theme.colors.background};
`;

export const StyledTemp = styled.p`
color: ${(props)=> props.theme.colors.primary};
font-size: 96px;
font-weight: 500;
background: ${(props) => props.theme.colors.background};
`

export const StyledToday = styled.p`
color: ${(props)=> props.theme.colors.blackWhite};
font-size: 40px;
background: ${(props) => props.theme.colors.background};
`
export const StyledImgWrapper = styled.div`
flex: 1 1 120;
height: 100%;
background: ${(props) => props.theme.colors.background};
img{
  width:100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
}
`