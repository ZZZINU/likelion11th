import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// 각 개별 속성을 props로 받음
const Box = styled.div`
  background-color :${props => props.bgColor};
  width: 100px;
  height: 100px;
`

// Box의 모든 속성들을 들고와서 상속받음
const Circle = styled(Box)`
  border-radius: 50%;
`;

function Props_Inheritance() {
  return (
   <Father>
      <Box bgColor="teal"/>
      <Box bgColor="tomato"/>
			<Circle bgColor="blue"/>
   </Father>
  );
}

export default Props_Inheritance;