// Detail.jsx
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  /* justify-content: center;
  align-items: center; */
  margin-top: 50px;
  width: 700px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  color: black;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`

const Area = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`

const Date = styled.h3`
  display: flex;
  font-size: 15px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`

const FineDust = styled.div``

const UltraFineDust = styled.div`
  margin-top: 30px;
`

const Ozone = styled.div`
  margin-top: 30px;
`

const IntegratedAtmosphericEnvironmentIndex = styled.div`
  margin-top: 30px;
`

const ContentRight = styled.div`
  display: flex;
`

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #fc9a65;
  border-radius: 20px;
`

const IntegratedAtmosphericEnvironmentRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IAERTitle = styled.div`
  display: flex;
  font-size: 18px;
  margin-bottom: 5px;
`

const IAERData = styled.h2`
  display: flex;
  font-size: 25px;
  font-weight: bold;
`

const Detail = () => {
  {
    /* 측정소별 디테일 페이지를 작성해주세요. */
    const location = useLocation()
    const { MSRRGN_NM, MSRSTE_NM, MSRDT, PM10, PM25, O3, IDEX_NM, IDEX_MVL } =
      location.state

    return (
      <>
        <DetailWrap>
          <Box>
            <Title>
              <Area>
                {MSRRGN_NM} | {MSRSTE_NM}
              </Area>
              <Date>{MSRDT.slice(0, 8)}</Date>
            </Title>

            <Content>
              <ContentLeft>
                <FineDust>미세먼지(㎍/㎥) : {PM10}</FineDust>
                <UltraFineDust>초미세먼지농도(㎍/㎥) : {PM25}</UltraFineDust>
                <Ozone>오존(ppm) : {O3}</Ozone>
                <IntegratedAtmosphericEnvironmentIndex>
                  통합대기환경지수 : {IDEX_MVL}
                </IntegratedAtmosphericEnvironmentIndex>
              </ContentLeft>

              <ContentRight>
                <ContentBox>
                  <IntegratedAtmosphericEnvironmentRating>
                    <IAERTitle>통합대기환경</IAERTitle>
                    <IAERData>{IDEX_NM}</IAERData>
                  </IntegratedAtmosphericEnvironmentRating>
                </ContentBox>
              </ContentRight>
            </Content>
          </Box>
        </DetailWrap>
      </>
    )
  }
}

export default Detail
