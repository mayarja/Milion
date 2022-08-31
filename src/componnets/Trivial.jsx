import React, { Fragment, useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import { TiDelete } from "react-icons/ti";

function Trivial({
  data,
  setquestionnum,
  questionnum,
  setstop,
  stoptimer,
  setwiner,
}) {
  let [dataquestion, setdataqustion] = useState(null);
  let [className, setclassName] = useState("answer");
  let [selectanswer, setselectanswer] = useState(null);
  let [playsound] = useSound(play);
  let [correctanswer] = useSound(correct);
  let [wronganswer] = useSound(wrong);
  let [prevent, setprevent] = useState("answer");
  let [deleteitem, setDeleteitem] = useState(null);
  let [showDicon, setshowDicon] = useState(true);

  let deleteitemfn = () => {
    let one = deleteitem.filter((e) => e.correct === false).splice(1);
    let two = deleteitem.filter((e) => e.correct === true);
    let three = [...one, ...two];
    setDeleteitem(three);
    console.log(deleteitem);
    setshowDicon(false);
  };

  useEffect(() => {
    if (questionnum <= 15) {
      setDeleteitem(data[questionnum - 1].answers);
    } else {
      setwiner(false);
    }
  }, [questionnum]);

  useEffect(() => {
    playsound();
  }, [playsound]);

  useEffect(() => {
    setdataqustion(data[questionnum - 1]);
  }, [data, questionnum]);

  let handleclick = (a) => {
    setprevent("answer2");
    clearInterval(stoptimer);
    setselectanswer(a);
    setclassName("active answer answer2");
    if (a.correct) {
      setTimeout(() => {
        setclassName("correct answer answer2");
      }, 3000);
      setTimeout(() => {
        correctanswer();
        setTimeout(() => {
          setquestionnum((prev) => prev + 1);
          setprevent("answer");
        }, 1500);
      }, 5000);
    } else {
      setTimeout(() => {
        setclassName("wrong answer");
      }, 3000);
      setTimeout(() => {
        wronganswer();
        setTimeout(() => {
          setstop(false);
        }, 1500);
      }, 5000);
    }
  };

  return (
    <Fragment>
      {showDicon && (
        <div className="delete">
          <TiDelete size={100} onClick={deleteitemfn} />
        </div>
      )}
      <div className="trivial-box">
        {dataquestion && <h3 className="question">{dataquestion.question}</h3>}
        <ul className="list-unstyled">
          {dataquestion &&
            deleteitem.map((e, index) => (
              <li
                key={index}
                className={selectanswer === e ? className : prevent}
                onClick={() => {
                  handleclick(e);
                }}
              >
                {e.text}
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Trivial;
