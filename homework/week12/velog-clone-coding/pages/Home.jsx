import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCaretDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Body = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  color: #212529;
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  font-size: 18px;
  font-weight: bold;

  margin-top: 30px;
`;
const CategoryLeft = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryRight = styled.div`
  display: flex;
  font-size: 20px;
  color: #868e96;
`;
const CategoryItem = styled.div`
  display: flex;
  margin-right: 13px;
  padding: 10px;
`;
const Period = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 8px;
  padding-right: 16px;
  cursor: pointer;
  color: #495057;
`;
const PeriodText = styled.div`
  display: flex;
  margin-right: 10px;
`;

function Home() {
  return (
    <Body>
      <Category>
        <CategoryLeft>
          <CategoryItem style={{ borderBottom: "2px solid" }}>
            <FontAwesomeIcon icon={faArrowTrendUp} /> &nbsp; 트렌딩
          </CategoryItem>
          <CategoryItem style={{ color: "#868e96", fontWeight: 400 }}>
            <FontAwesomeIcon icon={faClock} /> &nbsp; 최신
          </CategoryItem>
          <Period>
            <PeriodText>이번 주</PeriodText>
            <FontAwesomeIcon icon={faCaretDown} />
          </Period>
        </CategoryLeft>
        <CategoryRight>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </CategoryRight>
      </Category>
    </Body>
  );
}

export default Home;
