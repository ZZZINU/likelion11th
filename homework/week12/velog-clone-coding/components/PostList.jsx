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
              <H1>Hook이란?</H1>
              <H2>도입 목적</H2>
              <H3>리스트리스트</H3>
          </FloatList>
  
      </Float>
        ),
      };
      const list = lists[postId];
      return <>{list}</>;
}