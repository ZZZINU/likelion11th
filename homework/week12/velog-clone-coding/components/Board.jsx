import React from "react";
import styled from "styled-components";
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

export function Board() {
    return (
    <Content>
    <Card
    previewImg={StyledComponentsImg}
    title="Styled-Component 내용 정리"
    text="원문 : https://www.builder.io/blog/ai-prompts-for-web-developers-chatgpt지루하고 반복적인 코딩 작업에 지쳐서 효율성을 최적화하고 싶으시다면 제대로 찾아오셨습니다."
    date="2023년 7월 16일"
    commentCount={8}
    profileImg={ProfileImg}
    writer="ZZINU"
    likeCount={4}
    />

    <Card
    previewImg={ReactRouterDom}
    title="Styled-Component 내용 정리"
    text="원문 : https://www.builder.io/blog/ai-prompts-for-web-developers-chatgpt지루하고 반복적인 코딩 작업에 지쳐서 효율성을 최적화하고 싶으시다면 제대로 찾아오셨습니다."
    date="2023년 7월 16일"
    commentCount={8}
    profileImg={ProfileImg}
    writer="ZZINU"
    likeCount={4}
    />
    <Card
    previewImg={TechitImg}
    title="Styled-Component 내용 정리"
    text="원문 : https://www.builder.io/blog/ai-prompts-for-web-developers-chatgpt지루하고 반복적인 코딩 작업에 지쳐서 효율성을 최적화하고 싶으시다면 제대로 찾아오셨습니다."
    date="2023년 7월 16일"
    commentCount={8}
    profileImg={ProfileImg}
    writer="ZZINU"
    likeCount={4}
    />
    </Content>
        );
}
