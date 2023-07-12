import styled, {keyframes} from "styled-components"; // 무조건 import!

const Father = styled.div`
  display: flex;
`;

// animations을 쓰는 방법
const rotateBox = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateBox} 2s linear infinite;
`


function Animation() {
  return (
   <Father>
      <Box>
        <span>하이!</span>
      </Box>
   </Father>
  );
}

export default Animation;