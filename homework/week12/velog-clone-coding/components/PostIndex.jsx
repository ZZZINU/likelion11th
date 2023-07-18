import React from "react";
import styled from "styled-components";
import BookMark from "../src/images/bookmark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Index = styled.div`
  padding: 2rem 1.5rem;
  background-color: ${({ theme }) => theme.postIndexBackgroundColor};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: 20px;
    width: 40px;
    height: 48px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #495057;
    color: ${({ theme }) => theme.cardTextColor};
  }
`;
const ViewList = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ViewListArrow = styled.div`
  display: flex;
  font-size: 14px;
  span {
    color: #868e96;
    margin-right: 20px;
  }
`;

export function PostIndex({ title }) {
  return (
    <Index>
      <img src={BookMark} alt="bookMark" />
      <h2>{title}</h2>
      <ViewList>
        <div>
          <FontAwesomeIcon icon={faCaretDown} /> &nbsp; 목록 보기
        </div>
        <ViewListArrow>
          <span>1/1</span>
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#B2E6D7" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#B2E6D7" }} />
        </ViewListArrow>
      </ViewList>
    </Index>
  );
}
