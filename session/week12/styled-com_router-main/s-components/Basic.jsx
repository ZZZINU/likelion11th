import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  width : 100px;
  height : 100px;
  background-color: #049696;
  color : white;
`;
const Box2 = styled.div`
  width : 100px;
  height : 100px;
  background-color: #e94444;
`;

function Basic() {
  return (
   <Father>
      {/* 여기에 작성해주세요!! */}
      <Box>Hello!</Box>
      <Box2></Box2>
   </Father>
  );
}

export default Basic;