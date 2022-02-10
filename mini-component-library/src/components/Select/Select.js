import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledSelect = styled.select`
  border: none;
  background-color: transparent;
  appearance: none;
  font-size: inherit;
  padding: 12px 16px;
  padding-right: 56px;
  color: inherit;
  width: min-content;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-size: 1rem;
  display: inline-block;

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 10px;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon id="chevron-down" strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
