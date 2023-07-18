import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 50px;
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 16px;
`;
const H2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 16px;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 16px;
`;
const Bold = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
`;
const BlockQuote = styled.div`
  border-left: 4px solid #20c997;
  background-color: #f8f9fa;
  color: #212529;
  padding: 16px 16px 16px 32px;
  margin: 32px 0px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.7;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Code = styled.div`
  display: inline-block;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.postCodeBackgroundColor};
  padding: 1px 5px;
  font-size: 85%;
  font-weight: bold;
  border-radius: 3px;
`;
const Ul = styled.div`
  line-height: 1.7;
  margin: 18px 0px;
  padding: 0px 0px 0px 5%;
`;
const Li = styled.li`
  font-size: 18px;
  text-indent: -3.5%;
`;
const Hr = styled.div`
  background-color: #dee2e6;
  height: 1px;
  margin: 32px 0px;
`;



export function PostContent({ postId }) {
  const contents = {
    1: <Content>정리 예정입니다.</Content>,
    2: <Content>정리 예정입니다.</Content>,
    3: (
      <Content>
        {/* #1.0 */}

        <H1>useState</H1>
        <Bold>hooks</Bold>      
        <Ul>
          <Li>hooks는 react의 state machine에 연결하는 기본적인 방법</Li>
          <Li>⇒ 함수형 프로그래밍으로 변신!</Li>
        </Ul>
        <Bold>useState</Bold>
        <BlockQuote>const [item, setItem] = useState(1);</BlockQuote>
        <Ul>
          <Li>(첫 번째 요소) item : item이라는 이름을 가진 값</Li>
          <Li>(두 번째 요소) setItem : item의 값을 변경해주는 기능</Li>
          <Li>1 : 최초의 value</Li>
        </Ul>

        <br />
        {/* #1.1-#1.2 */}
        <H2>useInput</H2>
        <Ul>
          <Li>기본적으로 input을 업데이트한다.</Li>
          <Li>initialValue를 받는다.</Li>
        </Ul>
        <BlockQuote>⇒ 다른 function에서 이벤트를 처리할 수 있음.</BlockQuote>

        <br />
        {/* #1.3 */}
        <H2>useTabs</H2>
        <Ul>
          <Li>버튼에 따라 노출되는 내용을 변화시킬 수 있다. </Li>
          <Li>ex) 클릭하는 Section의 content만 보여주기</Li>
        </Ul>

        <br />
        {/* #2.0 */}
        <H1>useEffect</H1>
        <Bold> useEffect </Bold>
        <Ul>
          <Li>componentDidmount의 역할을 한다. → 새로고침하면 함수 (ex: sayHello) 실행</Li>
          <Li>componentDidUpdate의 역할을 한다. → 클릭 시 함수 (ex: sayHello) 실행</Li>
        </Ul>
        <Bold> 2개의 인자 </Bold>
        <Ul>
          <Li> 첫 번째는 function으로써의 effect이다. </Li>
          <Li>
            두 번째는 <Bold>dependency(deps)</Bold>이다. 만약 deps가 있다면
            effect는 (deps)리스트에 있는 값일 때만 값이 변하도록 활성화하는 것.
          </Li>
        </Ul>
        <BlockQuote>
          useEffect는 ComponentDidMount, ComponentWillUnMount,
          ComponentDidUpdate이다.{" "}
        </BlockQuote>

        <br />
        {/* #2.1 */}
        <H2>useTitle</H2>
        <Ul>
          <Li>useEffect를 이용하여 title을 바꾸는 것</Li>
        </Ul>

        <br />
        {/* #2.2 */}
        <H2>useClick</H2>
        <Bold> reference </Bold>
        <Ul>
          <Li>component의 어떤 부분을 선택할 수 있는 방법</Li>
          <Li>document.getElementByID()를 사용한 것과 동등</Li>
        </Ul>
        <Bold> useClick </Bold>
        <Ul>
          <Li>누군가 element를 클릭했을 때, function을 실행하는 것</Li>
          <Li>useEffect는 componentWillUnmount 때 발생하게 된다.</Li>
          <Li>
            useEffect 안에 function을 넣으면 componentDidMount,
            componentDidUpdate 때 호출된다.
          </Li>
          <Li>
            만약 dependency가 존재한다면 function은 componentDidMount일 때만
            호출된다.
          </Li>
          <Li>componentWillUnMount일 때는 return 한다.</Li>
          <Li>
            useEffect를 return 받은 함수는 componentWillUnMount 때 호출된다.
          </Li>
        </Ul>
        <BlockQuote>
          component가 mount되지 않았을 때, function이 일어나지 않게 하고 싶은
          경우 유용
        </BlockQuote>

        <br />
        {/* #2.3 */}
        <H2>useConfirm & usePreventLeave</H2>
        <P>이 두 가지는 useEffect와 useState를 사용하지 않는다. </P> <br />
        <Bold> useConfirm</Bold>
        <Ul>
          <Li>사용자가 무언가를 하기 전에 (확인)하는 것.</Li>
        </Ul>
        <P>
          ex) 사용자가 버튼을 클릭하는 작업을 하면 (이벤트를 실행하기 전에)
          메시지를 보여주고 싶은 경우(”진짜 삭제하실 건가요?”) → 이 메시지는
          브라우저에 의해서 만들어짐. <br />
          <br />⇒ 무엇을 저장하거나 삭제할 때, 브라우저는 일단 그게 실행되는
          것을 막고 브라우저는 confirm을 한다. 그 후, 사용자가 확인을 하면
          function이 계속 진행된다.
        </P>
        <br /><br />
        <Bold>usePreventLeave</Bold>
        <Ul>
          <Li>ex) window 창을 닫을 때 “아직 저장하지 않았어!”라고 말하는 것</Li>
        </Ul>

        <br />
        {/* #2.4 */}
        <H2>useBeforeLeave</H2>
        <Ul>
          <Li>기본적으로 탭을 닫을 때 실행되는 function이다.</Li>
        </Ul>
        <P>ex) 마우스가 document를 벗어났을 때, function 실행</P>

        <br />
        {/* #2.5 */}
        <H2>useFadeIn & useNetwork</H2>
        <Bold>useFadeIn</Bold>
        <Ul>
          <Li>기본적으로 하나의 element를 가진다.</Li>
          <Li>자동으로 서서히 나타나게 만든다. </Li>
        </Ul>
        <Bold>useNetwork</Bold>
        <Ul>
          <Li>navigator가 online 또는 offline이 되는 것을 막아준다.</Li>
          <Li>network 상태가 바뀔 때마다 function을 호출한다. </Li>
        </Ul>

        <br />
        {/* #2.6 */}
        <H2>useScroll & useFullscreen</H2>
        <Bold>useScroll</Bold>
        <Ul>
          <Li>
            유저가 스크롤 해서 무언가를 지나쳤을 때, 색상을 바꾸는 등 무언가를
            실행한다.
          </Li>
        </Ul>
        <Bold>useFullscreen</Bold>
        <Ul>
          <Li>
            어떤 element를 얻으면 fullscreen으로 바꾸어준다. → requestFullscreen
            사용
          </Li>
          <Li>fullscreen을 빠져나갈 땐 → exitFullscreen 사용</Li>
        </Ul>

        <br />
        {/* #2.7 */}
        <H2>useNotification</H2>
        <Ul>
            <Li>알람이 실행되는 function</Li>
            <Li>notification API 사용</Li>
        </Ul>
        <P>
          ex) 구글 크롬 알람 <br />
        </P>

        <br />
        {/* #2.8 */}
        <H2>useAxios</H2>
        <BlockQuote>axios : HTTP request를 만드는 것</BlockQuote>
        <Ul>
          <Li>axios를 Add Dependency 해준다. → npm 설치하는 것과 비슷.</Li>
          <Li>
            axios는 디폴트 URL를 설정하거나 자동으로 헤더를 설정하는 것과 같은
            것들을 허용한다. axios는 사용자가 instance를 만드는 것을 허용하고,
            사용자는 configuration을 할 수 있고, 그것과 함께 헤더를 보낼 수
            있다.{" "}
          </Li>
        </Ul>

        <br />
        {/* #2.9 */}
        <H1>Conclusions</H1>
        <Ul>
          <Li>addEventListener 기술에 대한 연습</Li>
          <Li>component에 접근하는 방법</Li>
          <Li>함수형 스타일 안에서의 상호작용하는 방법</Li>
        </Ul>
        <P>…등등을 연습할 수 있는 시간이었다.</P>

        <br />
        {/* #2.10 */}
        <H1>Publishing to NPM</H1>
        <BlockQuote>패키지를 publish하는 방법</BlockQuote>
        <Bold>[터미널]</Bold>
        <P>
        <br />
        <Code>npm init package </Code>
          <br />
          name: @nooks/use-title <br />
          version: 1.0.0 <br />
          description: React Hook to update your document’s title <br />
          test command: (없음) <br />
          git repo: (주소 입력) <br />
          keywords: react, react hooks, title, hooks <br />
          author: (자신) <br />
          license: MIT <br />
        </P>
        <Hr></Hr>
        <Bold>[터미널]</Bold>

        <P>
        <br />
        <Code>npm i react react-dom</Code> <br />
        ⇒ useState, useEffect를 사용하기 위해서
        </P>
        <Hr></Hr>
        <P>
          package.json에서 dependencies를 peerDependencies로 수정. <br />⇒
          요구되지만, 설치할 필요가 없다는 뜻 ex) 중복 설치 X
        </P>
        <Hr></Hr>
        <P>
          nooks는 NPM의 범위 같은 것. npm 홈페이지에서 Organization을 만든다.{" "}
          <br />
          name에 <Code>nooks</Code> 입력 → https://npmjs.com/org/nooks를 의미{" "}
          <br />
          Create → Continue 버튼 클릭 <br />
        </P>
        <Hr></Hr>
        <Bold>[터미널]</Bold>
        <P><br />
          <Code>npm login</Code>
          <br />
          <Code>npm publish --access public</Code>
          <br />
          <Hr></Hr>
        </P>
        <P>
          1. CodeSandBox에서 React 프로젝트를 생성
          <br />
          2. Add dependancy → `nooks/use-title` 를 검색
          <br />
          3. 클릭하면 추가된다. <br />
          4. 코드에서 useTitle 등을 사용해보기 <br />
          (ex : import useTitle from “@nooks/use-title”;)
        </P>
        <Hr></Hr>

        <br />
        {/* #2.11 */}
        <H1>What to learn next</H1>
        <Bold>Basic Hooks</Bold>
        <Ul>
          <Li>useState</Li>
          <Li>useEffect</Li>
          <Li>useContext</Li>
        </Ul>
        <Bold>Additional Hooks</Bold>
        <Ul>
          <Li>useReducer</Li>
          <Li>useCallback</Li>
          <Li>useMemo</Li>
          <Li>useRef</Li>
          <Li>useImperativeHandle</Li>
          <Li>useLayoutEffect</Li>
          <Li>useDebugValue</Li>
        </Ul>
      </Content>
    ),
  };
  const content = contents[postId];
  return <>{content}</>;
}
