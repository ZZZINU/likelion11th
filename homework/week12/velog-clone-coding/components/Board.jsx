import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import StyledComponentsImg from "../src/images/styledComponents.png";
import ReactRouterDom from "../src/images/reactRouterDom.png";
import TechitImg from "../src/images/techit.png";
import ProfileImg from "../src/images/profile.jpg";

//Content
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export function Board() {
  const posts = [
    {
      id: 1,
      previewImg: StyledComponentsImg,
      title: "Styled-Component 내용 정리",
      text: "준비중입니다.",
      date: "2023년 7월 16일",
      commentCount: 0,
      profileImg: ProfileImg,
      writer: "ZZINU",
      likeCount: 8,
    },
    {
      id: 2,
      previewImg: ReactRouterDom,
      title: "React-Router-Dom 내용 정리",
      text: "준비중입니다.",
      date: "2023년 7월 16일",
      commentCount: 0,
      profileImg: ProfileImg,
      writer: "ZZINU",
      likeCount: 3,
    },
    {
      id: 3,
      previewImg: TechitImg,
      title: "TECHIT 강의 내용 정리",
      text: "[노마드 코더 - 실전형 리액트 Hooks 10개] 강의를 듣고 정리하였습니다. 크게 useState와 useEffect에 대한 내용이며, 총 10개의 Hooks를 제작해보았습니다. ",
      date: "2023년 7월 18일",
      commentCount: 0,
      profileImg: ProfileImg,
      writer: "ZZINU",
      likeCount: 0,
    },
    // 나머지 포스트들...
  ];
  return (
    <Content>
      {posts.map((post) => (
        <StyledLink key={post.id} to={`/post/${post.id}`}>
          <Card
            previewImg={post.previewImg}
            title={post.title}
            text={post.text}
            date={post.date}
            commentCount={post.commentCount}
            profileImg={post.profileImg}
            writer={post.writer}
            likeCount={post.likeCount}
          />
        </StyledLink>
      ))}
    </Content>
  );
}
