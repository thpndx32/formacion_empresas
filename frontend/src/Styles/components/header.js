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
    background-color: ${theme.base};
    position: relative;
    z-index: 30;
    padding: 1rem 0.8rem;

`;

export const BoxHeader = styled(Box)`
    ${({ variant }) =>
    variant === "header" &&
    css`
        width: 100%;
        background-color: ${theme.colors.primary.contrast};    
    `}
`;