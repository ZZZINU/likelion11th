import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PreviousPostWrap = styled.div`
  overflow: hidden;
  width: 350px;
  height: 64px;
  color: ${({ theme }) => theme.cardTextColor};
  background-color: ${({ theme }) => theme.postIndexBackgroundColor };
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
const OtherPostArrow = styled.div`
  font-size: 36px;
  margin-right: 16px;
`;
const OtherPostInfo = styled.div`
  margin-right: 16px;
  span {
    font-size: 12px;
    font-weight: bold;
  }
`;
const OtherPostTitle = styled.h3`
  margin-top: 6px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export function PreviousPost({ otherPostTitle }) {
  return (
    <PreviousPostWrap>
      <OtherPostArrow>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          style={{ color: "#12b886" }}
        />
      </OtherPostArrow>
      <OtherPostInfo>
        <span>이전 포스트</span>
        <OtherPostTitle>{otherPostTitle}</OtherPostTitle>
      </OtherPostInfo>
    </PreviousPostWrap>
  );
}

