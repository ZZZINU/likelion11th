import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;
const BottomProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
    margin-right: 20px;
  }
`;
const ProfileName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.textColor};
`;
const ProfileDescription = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.cardTextColor};
`;
const Line = styled.div`
  display: flex;
  background: ${({ theme }) => theme.postWriterInfoLine};
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
const BottomPath = styled.div`
  display: flex;
`;
const PathGithub = styled.div`
  display: flex;
  font-size: 32px;
  margin-right: 15px;
`;
const PathMail = styled.div`
  display: flex;
  font-size: 32px;
`;

export function PostWriterInfo({ profileImg, profileName, profileDescription }) {
  return (
    <Bottom>
      <BottomProfile>
        <div>
          <img src={profileImg} alt="profile img" />
        </div>
        <div>
          <ProfileName>{profileName}</ProfileName>
          <ProfileDescription>{profileDescription}</ProfileDescription>
        </div>
      </BottomProfile>
      <Line></Line>
      <BottomPath>
        <PathGithub>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#868e96" }} />
        </PathGithub>
        <PathMail>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#868e96" }} />
        </PathMail>
      </BottomPath>
    </Bottom>
  );
}
