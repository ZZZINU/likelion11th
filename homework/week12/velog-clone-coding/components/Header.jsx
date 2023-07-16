import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSearch,
  faCaretDown,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.header`
  display: flex;
  color : #212529;
  width: 100vw;
  height: 64px;
  align-items: center;
  justify-content: space-between;

  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 25px;
`;
const Logo = styled.div`
  display: flex;
  margin-right: 30%;
  margin-left: 5%;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
`;
const NavListItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
  align-items: center;
`;
const NavListItem = styled.div`
  display: flex;
  margin-left: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const LoginButton = styled.div`
    display: flex;
    background-color: #212529;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    border: 1px solid black;
    border-radius: 1rem;
    cursor: pointer;
`


function Header() {
  return (
    <Nav>
       <Logo>
        <StyledLink to={"/"}>velog</StyledLink>
      </Logo>

      <NavListItems>
        <NavListItem>
          <FontAwesomeIcon icon={faSun} />
          {/* <FontAwesomeIcon icon={faMoon} /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-moon" style={{color: "#ffffff",}} /> */}
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
