import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";
const Nav = styled.header`
  display: flex;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor };
  height: 64px;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 25px;
  ${({ isHome }) =>
    !isHome &&
    css`
      background-color: ${({ theme }) => theme.postBackgroundColor };
    `}
`;

const Logo = styled.div`
  display: flex;
  margin-right: 30%;
  margin-left: 10%;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
`;

const NavListItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  align-items: center;
`;

const NavListItem = styled.div`
  display: flex;
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  font-size: 30px;
`;

const LoginButton = styled.div`
  display: flex;
  color: ${({ theme }) => theme.backgroundColor};
  background-color: ${({ theme }) => theme.textColor };
  font-size: 1rem;
  font-weight: bold;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
`;
const LogName =  styled.div`
  font-size: 22px;
  font-weight: regular;
  margin-left: 20px;
`;
function Header({ isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Nav isHome={isHome}>
      <Logo>
        {isHome ? (
          <StyledLink to={"/"}>velog</StyledLink>
        ) : (
          <StyledLink to={"/"}>
            <FontAwesomeIcon icon={faVimeo} />
            <LogName>ZZZINU.log</LogName>
          </StyledLink>
          // {username}
        )}
      </Logo>

      <NavListItems>
        <NavListItem onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </NavListItem>

        <NavListItem>
          <FontAwesomeIcon icon={faSearch} />
        </NavListItem>

        <NavListItem>
          <LoginButton>로그인</LoginButton>
        </NavListItem>
      </NavListItems>
    </Nav>
  );
}

export default Header;
