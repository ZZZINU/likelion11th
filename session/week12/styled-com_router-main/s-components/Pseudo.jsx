import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 300px;
  width: 300px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  // 상대적으로 같은 포지션에 있는 모든 span에 영향을 줌
  span {
    font-size: 50px;
    &:hover{
      font-size: 100px;
    }
  }
  // div와 그 하위 태그에 다 영향을 줌
  &:active{
    opacity: 0;
  }
`

function Pseudo() {
  return (
   <Father>
      <Box>
        <span>🦁</span>
      </Box>
   </Father>
  );
}

export default Pseudo;