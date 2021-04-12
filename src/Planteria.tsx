import * as React from "react";

import styled from "styled-components";

const PlanteriaCon = styled.div`
  width: 100vw;
  height: 100%;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  position: absolute;
`;

export const Planteria = () => {
  return (
    <PlanteriaCon>
      <div>This is the Planteria</div>
    </PlanteriaCon>
  );
};
