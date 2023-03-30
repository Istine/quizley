import React from "react";
import Menu from "./menu";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 1rem 0;
    font-size: 3rem;
    font-family: poppins, sans-serif;
  }
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Menu />
      <StyledDiv>{children}</StyledDiv>
    </div>
  );
};

export default Layout;
