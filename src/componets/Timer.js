import React from "react";
import { useTimer } from "react-timer-hook";
import QuizeList from "./quize/QuizeList";

function MyTimer({expiryTimestamp}) {
  const {
    seconds,
    minutes,
    
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      
      <h2>カップ麺ができるまで...</h2>
      <div style={{ fontSize: "50px" }}>
        <span>{minutes}</span>:
        <span>{seconds<10 ?
                "0"+seconds
              : seconds}</span>
      </div>
      <QuizeList/>
      
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
