import { useEffect, useState } from "react";

function Timer() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [consoleMinutes, setConsoleMinutes] = useState(60);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
      setConsoleMinutes(consoleMinutes => consoleMinutes-1);
    }, 1000); // 1초마다 렌더링

    return () => {
        clearInterval(timeoutId);
    };
  });

  useEffect(() => {
    if (consoleMinutes === 0) {
      console.log('내 1분....');
      setConsoleMinutes(60);
    }
  }, [consoleMinutes]);


  return (
    <div>
      <h3>오늘이</h3>
      <h2>
        {hours > 13 ? "0" + (23 - hours) : 23 - hours}:
        {minutes > 49 ? "0" + (59 - minutes) : 59 - minutes}:
        {seconds > 49 ? "0" + (59 - seconds) : 59 - seconds}
      </h2>
      <h3>밖에 안남았다니 ..</h3>
    </div>
  );
}

export default Timer;
