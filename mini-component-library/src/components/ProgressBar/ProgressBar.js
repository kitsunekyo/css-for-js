/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--padding": 0,
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--padding": 0,
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--padding": "4px",
    "--height": "24px",
    "--borderRadius": "8px",
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  height: var(--height);
  overflow: hidden;
  padding: var(--padding);
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  transition: width 200ms ease-out;
  width: ${(p) => p.value}%;
  border-radius: ${(p) =>
    p.value < 100
      ? "calc(var(--borderRadius) / 2) 0 0 calc(var(--borderRadius) / 2)"
      : "calc(var(--borderRadius) / 2 )"};
`;

const ProgressBar = ({ value, size = "medium" }) => {
  const style = SIZES[size];

  return (
    <Wrapper
      style={style}
      aria-valuemax="0"
      aria-valuemin="100"
      aria-valuenow={value}
    >
      <Bar value={value} />
    </Wrapper>
  );
};

export default ProgressBar;
