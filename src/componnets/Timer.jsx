import React, { useEffect, useState } from "react";
import wrong from "../sounds/wrong.mp3";
import useSound from "use-sound";

function Timer({ setstop, questionnum, setstoptimer }) {
  let [wronganswer] = useSound(wrong);

  let [timer, settimer] = useState(30);

  useEffect(() => {
    if (timer >= 1) {
      let interval = setInterval(() => {
        settimer((prev) => prev - 1);
      }, 1000);
      setstoptimer(interval);
      return () => {
        clearInterval(interval);
      };
    } else {
      setstop(false);
      wronganswer();
    }
  }, [settimer, timer, setstop, setstoptimer, wronganswer]);

  useEffect(() => {
    settimer(30);
  }, [questionnum]);

  return <div>{timer}</div>;
}

export default Timer;
