import styled, {css} from "styled-components"
import { theme } from "../theme"

export const Box = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  position: ${(props) => props.position};
  gap: ${(props) => props.gap};
  cursor: ${(props) => props.cursor};
  background: ${(props) => props.background} !important;
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexWrap};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      width: ${({ width }) => (width ? width : "100%")};
      flex-direction: row;
      /* align-items: center; */
      align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
      justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "space-between"};

      .btnFilterOrder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: none;
        outline: none;
        background: ${theme.colors.base};
        cursor: pointer;
        gap: 8px;

        img {
          width: 32px;
          height: 32px;
        }

        span {
          font-size: 1rem;
          font-weight: bold;
        }
      }
    `}
`