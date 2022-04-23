import { useState, useEffect } from "react";
import "./timer.css"

function Timer({ start, end }) {
  const [time, setTime] = useState(+start);

  useEffect(() => {
    let id = setInterval(() => {
      setTime((Value) => {
    
        if (Value+1 === +end) {
          clearInterval(id);
        }
        return Value + 1;
      });
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="timercs">
      <p className="ptag">
        <div>Start at: <span>{start}</span></div> 
        <div> End at:  <span>{end}</span></div>
      </p>
      <h2>Timer: {time}</h2>
    </div>
  );
}

export default Timer;