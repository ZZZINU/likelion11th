import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 50px;
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 16px;
`;
const H2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 16px;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 16px;
`;
const Bold = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 18px 0px;
`;
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
`;
const BlockQuote = styled.div`
  border-left: 4px solid #20c997;
  background-color: #f8f9fa;
  color: #212529;
  padding: 16px 16px 16px 32px;
  margin: 32px 0px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.7;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Code = styled.div`
  display: inline-block;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.postCodeBackgroundColor};
  padding: 1px 5px;
  font-size: 85%;
  font-weight: bold;
  border-radius: 3px;
`;
const Ul = styled.div`
  line-height: 1.7;
  margin: 18px 0px;
  padding: 0px 0px 0px 5%;
`;
const Li = styled.li`
  font-size: 18px;
  text-indent: -3.5%;
`;

export function PostContent({ postId }) {
  const contents = {
    1: <Content>정리 예정입니다.</Content>,
    2: <Content>정리 예정입니다.</Content>,
    3: (
      <Content>
        <H1>#1.0 </H1>
        <P>
          : 컴포넌트의 렌더링 결과물에 영향을 주는 정보를 저장한 일종의
          자바스크립트 객체, 컴포넌트 내부에서 바뀔 수 있는 값
        </P>
        <BlockQuote>재사용성</BlockQuote>
        <H2>✅useState</H2>
        <H3>예시</H3>
        <Bold>UserContext.jsx</Bold>
        <P>
          <Code>App</Code> 컴포넌트는 상위 컴포넌트로부터 받은 user 객체를
          UserContext.Provider를<Code>컴포넌트로부터asdasdda</Code> 통해 하위
          컴포넌트에 전달한다.
        </P>
        <Ul>
          <Li>
            UserContext는 React.createContext()를 사용하여 생성된 Context
            객체다UserContext는 React.createContext()를 사용하여 생성된 Context
            객체다..
          </Li>
          <Li>
            UserContext는 React.createContext()를 사용하여 생성된 Context
            객체다.
          </Li>
        </Ul>
      </Content>
    ),
  };
  const content = contents[postId];
  return <>{content}</>;
}
