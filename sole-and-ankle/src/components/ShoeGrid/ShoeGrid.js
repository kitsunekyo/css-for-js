import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeContainer>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`;

const ShoeContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

export default ShoeGrid;
