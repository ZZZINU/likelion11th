import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHeart } from "@fortawesome/free-solid-svg-icons";

const Float = styled.div`
  position: sticky;
  width: 50px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.cardLineColor};
  border-radius: 40px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.cardTextColor};
  font-size: 12px;
  font-weight: bold;
  top: 15%;
  background-color: ${({ theme }) => theme.postIndexBackgroundColor};
`;
const FloatHeart = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.postIndexBackgroundColor};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.postFloatBorderColor};
  margin-bottom: 10px;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;
const FloatShare = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.postIndexBackgroundColor};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.postFloatBorderColor};
  margin-top: 10px;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;

export function PostFloat({ count }) {
  return (
    <Float>
      <FloatHeart>
        <FontAwesomeIcon icon={faHeart} style={{ color: "#868E96" }} />
      </FloatHeart>
      <div>{count}</div>
      <FloatShare>
        <FontAwesomeIcon icon={faShareNodes} style={{ color: "#868E96" }} />
      </FloatShare>
    </Float>
  );
}
