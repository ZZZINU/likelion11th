import React from "react";
import styled from "styled-components";

const Head = styled.div`
  width: 768px;
  background-color: ${({ theme }) => theme.postBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
`;
const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  margin-top: 0px;
  font-weight: 800;
  margin-bottom: 2rem;
  word-break: keep-all;
  transition: color 0.125s ease-in 0s;
`;
const Info = styled.div`
  b {
    font-weight: bold;
  }
  span {
    color: ${({ theme }) => theme.cardTextColor};
  }
`;

export function PostHead({ title, author, date }) {
  return (
    <Head>
      <Title>{title}</Title>
      <Info>
        <b>{author}</b>
        &nbsp;·&nbsp;
        <span>{date}</span>
      </Info>
    </Head>
  );
}
