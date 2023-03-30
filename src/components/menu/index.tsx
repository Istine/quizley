import React from "react";
import styled from "styled-components";
import { AiFillAppstore } from "react-icons/ai";

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 0.3px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  svg {
    font-size: 35px;
  }
`;

const Menu: React.FC<{}> = () => {
  return (
    <StyledNav>
      <AiFillAppstore color="#1a0b70" />
    </StyledNav>
  );
};

export default Menu;
