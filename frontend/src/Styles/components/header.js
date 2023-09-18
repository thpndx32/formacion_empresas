import styled, {css} from "styled-components";
import { Box } from "../elements/Box";
import { theme } from "../theme";

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-row-gap: 10px;
    background-color: ${theme.main};
    position: relative;
    z-index: 30;
    padding: 1rem 0.8rem;
    ${({status})=> status === "logged" ? css `
        grid-template-areas:
        "logo options"
        "search search"; 

        & > div:nth-child(1) {
        grid-area: logo;
        margin-right: auto;
        }
        & > div:nth-child(2) {
        grid-area: search;
        }
        & > div:nth-child(3) {
        grid-area: options;
        margin-left: auto;
        }  
        
        @media screen and (min-width: 1024px) {
        grid-template-areas: "logo search options";
        grid-row-gap: 0px;
        place-items: center;
        padding: 1.2rem 0.8rem;
        }
    `: css `
    grid-template-areas: "logo options";    
    justify-content: space-between;
    `}
`;

export const Brand = styled.img`
  width: 105px;
  height: auto;
  display: block;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  a {
    text-decoration: none;
  }

  @media screen and (min-width: 445px){
    gap: 20px;
  }
`;

export const BoxHeader = styled(Box)`
    ${({ variant }) =>
    variant === "header" &&
    css`
        width: 100%;
        background-color: ${theme.colors.contrast};    
    `}
`;