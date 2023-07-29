import { useEffect, useState } from "react";
import {
  BodySection,
  DataTable,
  HeadSection,
  HeadText,
  HomeContainer,
  TableTh,
} from "./components/BodyStyle";
import axios from "axios"; // import 해주기!!
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // State 작성------------------------------------------------
  const [weatherData, setWeatherData] = useState([]);
  const { VITE_APP_API_KEY } = import.meta.env;
  // console.log(VITE_APP_API_KEY);

  // const API_KEY = import.meta.env;
  // console.log(API_KEY.VITE_APP_API_KEY);

  // Function 작성---------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/5/`
      );
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log("데이터를 불러오는데 실패했습니다.");
      // 로그아웃 처리 -> 로그인 페이지로 이동시키는 로직
    }
  };
  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  // 미세먼지 가장 낮은 데이터 3개 추출
  const sortedData = weatherData.sort((a, b) => a.PM10 - b.PM10).slice(0, 3);
  console.log(sortedData);

  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        {/* 아래에 날씨 Open API 관련 코드 작성 */}
        <DataTable>
          <thead>
            <tr>
              <TableTh>측정일</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((lion, idx) => (
              <tr key={idx}>
                <td>{lion.MSRDT}</td>
                <td onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`)}>{lion.MSRSTE_NM}</td>
                <td style={{ color: sortedData.includes(lion) ? "yellow" : "" }}>{lion.PM10}</td>
                <td>{lion.PM25}</td>
                <td>{lion.IDEX_NM}</td>
                <td>{lion.IDEX_MVL}</td>
              </tr>
            ))}

            {/* <td>{weatherData[0]?.MSRDT}</td>
              <td>{weatherData[0]?.MSRSTE_NM}</td>
              <td>{weatherData[0]?.PM10}</td>
              <td>{weatherData[0]?.PM25}</td>
              <td>{weatherData[0]?.IDEX_NM}</td>
              <td>{weatherData[0]?.IDEX_MVL}</td> */}
          </tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
