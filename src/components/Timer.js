import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(4 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="timer">
      <img src="/Timer.svg" alt="Timer" className="timer-icon" />
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;
