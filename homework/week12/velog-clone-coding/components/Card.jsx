// components/MyComponent.jsx
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const CardTotal = styled.div`
  display: flex;
  width: 350px;
  height: 400px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardColor };
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  flex-direction: column;
  overflow: hidden;
`;
const PreviewImg = styled.div`
  img {
    width: 350px;
    height: 200px;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardContentTitle = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
`;
const CardContentText = styled.p`
  height: 63px;
  margin: 0px 0px 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.cardTextColor};
`;
const CardContentOther = styled.div`
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
`;
const CardContentTop = styled.div`
  display: flex;
  height: 141px;
  padding: 16px;
  padding-bottom: 0px;
  flex-direction: column;
`;
const CardContentBottom = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.cardLineColor};
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
`;
const Writer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }

  span {
    color: #868e96;
  }

  b {
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
  }
`;

export function Card({
  previewImg,
  title,
  text,
  date,
  commentCount,
  profileImg,
  writer,
  likeCount,
}) {
  return (
    <CardTotal>
      <PreviewImg>
        <img src={previewImg} alt="preview img" />
      </PreviewImg>
      <CardContent>
        <CardContentTop>
          <CardContentTitle>{title}</CardContentTitle>
          <CardContentText>{text}</CardContentText>
          <CardContentOther>
            {date}
            <span>&nbsp;·&nbsp;</span>
            {commentCount}개의 댓글
          </CardContentOther>
        </CardContentTop>
        <CardContentBottom>
          <Writer>
            <img src={profileImg} alt="profile img" />
            <span>
              by <b>{writer}</b>
            </span>
          </Writer>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            &nbsp;&nbsp;{likeCount}
          </div>
        </CardContentBottom>
      </CardContent>
    </CardTotal>
  );
}
