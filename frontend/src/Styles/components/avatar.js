import styled, { css } from "styled-components";
import { Box } from "../elements/Box";
import { theme } from "../theme";

export const BoxAvatar = styled(Box)`
  color: ${theme.colors.contrast};
  padding: ${(props) => props.padding};

  & > span:nth-child(1) {
    font-weight: bold;
    font-size: 14px;
  }

  & > span:nth-child(2) {
    font-size: 12px;
  }
`;