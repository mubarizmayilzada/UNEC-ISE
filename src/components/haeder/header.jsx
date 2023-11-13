import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/img/logo(2).svg";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 104px;
  padding: 20px 60px;
  background-color: #fff;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img alt="" src={LogoSrc} />
        </Link>
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
