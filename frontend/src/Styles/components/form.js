import { theme } from "../theme";
import styled, {css} from "styled-components";

export const Formulario = styled.form`
    z-index: 10000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;
    padding: 16px;
    background-color: ${theme.colors.contrast};
    border-radius: 10px;

    & > div:first-child {
        margin-bottom: 1.5rem;
        text-align: center;
        gap: 20px;                
    }
    & > div:last-child {
        margin-top: 1.5rem;
    }  

    ${(props) =>
        props.variant === "primary" &&
        css`
            min-width: 280px;
            max-width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            max-height: 600px;
            overflow-y: auto;
            margin: 0 1rem;

            @media screen and (min-width: 768px) {
                max-width: 400px;
                padding: 1.5rem 2rem;
            }
        `}
`;