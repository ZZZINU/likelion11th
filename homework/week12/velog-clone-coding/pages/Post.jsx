import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileImg from "../src/images/profile.jpg";
import { PostHead } from "../components/PostHead";
import { Comments } from "../components/Comments";
import { PreviousPost } from "../components/PreviousPost";
import { NextPost } from "../components/NextPost";
import { PostWriterInfo } from "../components/PostWriterInfo";
import { PostIndex } from "../components/PostIndex";
import { PostFloat } from "../components/PostFloat";
import { PostContent } from "../components/PostContent";
import { PostList } from "../components/PostList";
const Root = styled.div`
  background-color: ${({ theme }) => theme.postBackgroundColor};
`;
const Body = styled.div`
  background-color: ${({ theme }) => theme.postBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  width: 768px;
  margin-left: 50px;
  margin-right: auto;
`;
const BodyWrap = styled.div`
  width: 1000px;
  margin-top: 40px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const OtherPostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
`;

function Post() {
  const { postId } = useParams();
  const posts = [
    {
      id: 1,
      title: "Styled-Component 내용 정리",
      content: "ZZZINU",
      date: "2023년 7월 16일",
      floatCount: 88,
      indexTitle: "정리 예정",
      profileImg: ProfileImg,
      profileName: "이유진",
      profileDescription: "중꺾마 아기사자",
      previousPostTitle: "TECHIT 강의 내용 정리",
      nextPostTitle: "React-Router-Dom 내용 정리",
      commentCount: 0,
    },
    {
      id: 2,
      title: "React-Router-Dom 내용 정리",
      content: "ZZZINU",
      date: "2023년 7월 16일",
      floatCount: 33,
      indexTitle: "정리 예정",
      profileImg: ProfileImg,
      profileName: "이유진",
      profileDescription: "중꺾마 아기사자",
      previousPostTitle: "Styled-Component 내용 정리",
      nextPostTitle: "TECHIT 강의 내용 정리",
      commentCount: 0,
    },
    {
      id: 3,
      title: "TECHIT 강의 내용 정리",
      content: "ZZZINU",
      date: "2023년 7월 18일",
      floatCount: 100,
      indexTitle: "목차",
      profileImg: ProfileImg,
      profileName: "이유진",
      profileDescription: "중꺾마 아기사자",
      previousPostTitle: "React-Router-Dom 내용 정리",
      nextPostTitle: "Styled-Component 내용 정리",
      commentCount: 0,
    },
  ];
  const post = posts.find((post) => post.id === Number(postId));
  return (
    <Root>
      <PostHead title={post.title} author={post.content} date={post.date} />

      <BodyWrap>
        {/*Float*/}
        <PostFloat count={post.floatCount} />

        <Body>
          {/*Index*/}
          <PostIndex title={post.indexTitle} />

          {/* 내용 */}
          <PostContent postId={postId} />

          <PostWriterInfo
            profileImg={ProfileImg}
            profileName={post.profileName}
            profileDescription={post.profileDescription}
          />

          <OtherPostWrap>
            {/* 이전 포스트 */}
            <PreviousPost otherPostTitle={post.previousPostTitle} />
            {/* 다음 포스트 */}
            <NextPost otherPostTitle={post.nextPostTitle} />
          </OtherPostWrap>

          <Comments commentCount={post.commentCount} />
        </Body>
        {/* List */}
        <PostList postId={postId} />
      </BodyWrap>
    </Root>
  );
}

export default Post;
