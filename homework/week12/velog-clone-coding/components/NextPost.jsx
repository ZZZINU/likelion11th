import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextPostWrap = styled.div`
  overflow: hidden;
  width: 350px;
  height: 64px;
  background-color: ${({ theme }) => theme.postIndexBackgroundColor };
  display: flex;
  justify-content: end;
  align-items: center;
  padding-left: 16px;

  span {
    display: flex;
    justify-content: end;
  }
`;
const OtherPostArrow = styled.div`
  font-size: 36px;
  margin-right: 16px;
`;
const OtherPostInfo = styled.div`
  color: ${({ theme }) => theme.textColor};
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

export function NextPost({ otherPostTitle }) {
    return (
      <NextPostWrap>
        <OtherPostInfo>
          <span>다음 포스트</span>
          <OtherPostTitle>{otherPostTitle}</OtherPostTitle>
        </OtherPostInfo>
        <OtherPostArrow>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "#12b886" }}
          />
        </OtherPostArrow>
      </NextPostWrap>
    );
  }
  