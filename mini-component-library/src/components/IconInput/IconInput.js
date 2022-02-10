import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--fontSize": "14px",
  },
  large: {
    "--fontSize": "18px",
  },
};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 4px;
  padding-left: 24px;
  border-bottom: solid 1px ${COLORS.black};
  outline-offset: 2px;
  font-size: var(--fontSize);
  width: ${(p) => p.width}px;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];

  return (
    <Wrapper style={style}>
      <StyledIcon id={icon} size={size === "small" ? 12 : 16} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput type="text" placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

export default IconInput;
