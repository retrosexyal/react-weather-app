import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:400px;
  height: 300px;
  
  justify-content: space-between;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-radius: ${(props) => props.theme.borderRadius.primary};
`;

export const StyledWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

export const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
`;

export const StyledText = styled.p`
  color: ${(props)=> props.theme.colors.secondary};
  font-size: 25px;
`;

export const StyledTemp = styled.p`
color: ${(props)=> props.theme.colors.primary};
font-size: 96px;
font-weight: 500;
`

export const StyledToday = styled.p`
color: ${(props)=> props.theme.colors.black};
font-size: 40px;
`
export const StyledImgWrapper = styled.div`
flex: 1 1 120;
height: 100%;
img{
  width:100%;
  height: 100%;
}
`