import React from "react";
import styled from "styled-components";

const CommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  span {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
  }

  textarea {
    background-color: ${({ theme }) => theme.postIndexBackgroundColor};
    height: 70px;
    padding: 15px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid ${({ theme }) => theme.postWriterInfoLine};
    border-radius: 4px;
    resize: none; 
    outline: none;
    margin-bottom: 30px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    background-color: #12b886;
    color: ${({ theme }) => theme.postBackgroundColor};
    cursor: pointer;
  }
`;
const CommentButton = styled.div`
  display: flex;
  justify-content: end;
`;

export function Comments({ commentCount }) {
  return (
    <CommentsWrap>
      <span>{commentCount}개의 댓글</span>
      <textarea placeholder="댓글을 작성하세요"></textarea>
      <CommentButton>
        <button color="teal">댓글 작성</button>
      </CommentButton>
    </CommentsWrap>
  );
}
