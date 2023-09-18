import styled, { css } from "styled-components";
import { theme } from "../theme";

export const Button = styled.button`
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ gap }) => gap};
    width: ${(props) => props.width};
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    cursor: pointer;
    font-size: 8px;
    transition: all 0.2s linear;
    position: ${(props) => (props.position ? props.position : "relative")};
    &:hover {
    transform: scale(1.15);
    }

    ${(props) =>
    props.disabled &&
    css`
        opacity: 0.4;
        cursor: not-allowed;
    `}
    ${({ variant }) =>
    variant === "btn_access" &&
    css`
        padding: ${({destined})=> destined === "register" ? "0 10px" : "0"};          
        width: max-content;      
        background-color: ${theme.colors.main};
        border: ${({destined}) => 
        destined === "register" ? "1px solid " + theme.colors.main : "none"};              
        color: ${theme.colors.base};
        font-size: 12px;
        font-weight: bold;
        &:hover {
            background-color: ${theme.colors.hover_main};
        }
        @media screen and (min-width: 440px) {
        font-size: 14px;
        }
    `}
`;