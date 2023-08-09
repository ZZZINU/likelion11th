import React, { useEffect, useState, useRef } from "react";
import { Container, LogoImg, NavInput, UserImg } from "./Styled.jsx";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const nav = useRef(true);

  // NavInput
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    nav.current.style.backgroundColor = show ? "black" : "";
  }, [show]);

  // NavInput
  const handleChange = (e) => {
    setsearchValue(e.target.value); // 바로 검색가능하다.
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <Container ref={nav}>
      {/* <Container show={show? 'true': 'false'}></Container> */}
      <LogoImg
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
      />
      <NavInput
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="영화제목을 입력해주세요."
      />

      <UserImg
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </Container>
  );
}
