import styled from "styled-components"

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
`