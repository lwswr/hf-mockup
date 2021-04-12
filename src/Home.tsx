import * as React from "react";
import styled from "styled-components";

const HomeCon = styled.div`
  width: 100vw;
  height: 100%;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  position: absolute;
`;

const Title = styled.div`
  font-size: 25px;
  font-family: "Shippori Mincho", serif;
`;

export const Home = () => {
  return (
    <HomeCon>
      <Title>Gloucestershire's Leading Independent Garden Centre</Title>
    </HomeCon>
  );
};
