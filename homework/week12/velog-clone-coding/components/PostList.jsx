import React from "react";
import styled from "styled-components";

const Float = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FloatList = styled.div`
  position: sticky;
  top: 15%;
  border-left: 2px solid ${({ theme }) => theme.cardLineColor};
  margin-left: 50px;
  padding: 4px 12px;
  color: ${({ theme }) => theme.postFloatListColor};
  line-height: 1.5;
  font-size: 14px;
`;
const H1 = styled.div`
`;
const H2 = styled.div`
    padding-left: 12px;
`;
const H3 = styled.div`
    padding-left: 24px;
`;

export function PostList({ postId }) {
    const lists = {
        1: <></>,
        2: <></>,
        3: (
          <Float>
          <FloatList>
              <H1>useState</H1>
              <H2>useInput</H2>
              <H2>useTabs</H2>

              <H1>useEffect</H1>
              <H2>useTitle</H2>
              <H2>useClick</H2>
              <H2>useConfirm & usePreventLeave</H2>
              <H2>useBeforeLeave</H2>
              <H2>useFadeIn & useNetwork</H2>
              <H2>useScroll & useFullscreen</H2>
              <H2>useNotification</H2>
              <H2>useAxios</H2>

              <H1>Conclusions</H1>
              <H1>Publishing to NPM</H1>
              <H1>What to learn next</H1>
          </FloatList>
  
      </Float>
        ),
      };
      const list = lists[postId];
      return <>{list}</>;
}