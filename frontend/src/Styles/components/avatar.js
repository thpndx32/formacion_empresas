import styled, { css } from "styled-components";
import { Box } from "../elements/Box";
import { theme } from "../theme";

export const BoxAvatar = styled(Box)`
  color: ${theme.colors.main};
  padding: ${(props) => props.padding};

  & > span:nth-child(1) {
    font-weight: bold;
    font-size: 14px;
  }

  & > span:nth-child(2) {
    font-size: 12px;
  }

  ${({ variant }) =>
    variant === "avatar" &&
    css`
      width: 100%;
      /* margin-right: 10px; */
    `}

  ${({ variant }) =>
    variant === "avatar_elements" &&
    css`
      width: 100%;
      gap: 10px;

      @media screen and (min-width: 375px) {
        gap: 20px;
      }
    `}

  ${({ variant }) =>
    variant === "modal_options" &&
    css`
      width: 220px;
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: 70px;
      padding: 0;
      z-index: 100;
      height: auto;
      border-radius: 10px 0 10px 10px;
      border: 1px solid #a400cd;
      color: ${theme.colors.main};
      background-color:${theme.colors.contrast}};

      img {
        width: 22px;
        position: absolute;
        top: -17px;
        right: 0;
      }

      @media screen and (min-width: 1024px) {
        top: 100px;
      }
    `};

  ${({ variant }) =>
    variant === "rol" &&
    css`
      width: 100%;
      display: none;
      font-size: 15px;
      color: ${theme.colors.main};

      @media screen and (min-width: 550px) {
        display: block;
      }
    `}
`;
