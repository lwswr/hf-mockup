import * as React from "react";
import styled from "styled-components";

const AboutUsCon = styled.div`
  width: 100vw;
  height: 100%;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  position: absolute;
`;

export const AboutUs = () => {
  return (
    <AboutUsCon>
      <div>This is the About Us</div>
    </AboutUsCon>
  );
};
