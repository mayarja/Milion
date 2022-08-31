import { Fragment, useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./componnets/Timer";
import Trivial from "./componnets/Trivial";
import { TiDelete } from "react-icons/ti";
import { IoMdRefresh } from "react-icons/io";
import User from "./componnets/User";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

function App() {
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How many bones are in the human body?",
      answers: [
        {
          text: "206 bones",
          correct: true,
        },
        {
          text: "258 bones",
          correct: false,
        },
        {
          text: "316 bones",
          correct: false,
        },
        {
          text: "190 bones",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "When was instagram created?",
      answers: [
        {
          text: "October 6, 2012",
          correct: false,
        },
        {
          text: "October 6, 2010",
          correct: true,
        },
        {
          text: "October 6, 2009",
          correct: false,
        },
        {
          text: "October 6, 2011",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "When was the first intel processor?",
      answers: [
        {
          text: "1969",
          correct: false,
        },
        {
          text: "1975",
          correct: false,
        },
        {
          text: "1986",
          correct: false,
        },
        {
          text: "1971",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "The first appearance of the Internet?",
      answers: [
        {
          text: "January 1, 1987",
          correct: false,
        },
        {
          text: "January 1, 1993",
          correct: false,
        },
        {
          text: "January 1, 1984",
          correct: false,
        },
        {
          text: "January 1, 1983",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "When was the first DVD invented?",
      answers: [
        {
          text: "1998",
          correct: false,
        },
        {
          text: "1996",
          correct: true,
        },
        {
          text: "1995",
          correct: false,
        },
        {
          text: "1992",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Japan's first discovery?",
      answers: [
        {
          text: "1543",
          correct: true,
        },
        {
          text: "1549",
          correct: false,
        },
        {
          text: "1555",
          correct: false,
        },
        {
          text: "1537",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "France's first elections?",
      answers: [
        {
          text: "1789",
          correct: false,
        },
        {
          text: "1791",
          correct: true,
        },
        {
          text: "1798",
          correct: false,
        },
        {
          text: "1795",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "The first appearance of Node js?",
      answers: [
        {
          text: "May 27, 2009",
          correct: true,
        },
        {
          text: "May 30, 2010",
          correct: false,
        },
        {
          text: "oct 27, 2009",
          correct: false,
        },
        {
          text: "May 25, 2008",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Laravel first appearance?",
      answers: [
        {
          text: "	June 2011",
          correct: true,
        },
        {
          text: "	June 2015",
          correct: false,
        },
        {
          text: "	June 2010",
          correct: false,
        },
        {
          text: "	June 2009",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The first appearance of the react js?",
      answers: [
        {
          text: "May 29, 2013",
          correct: true,
        },
        {
          text: "May 29, 2015",
          correct: false,
        },
        {
          text: "oct 24, 2013",
          correct: false,
        },
        {
          text: "May 20, 2012",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Angular js first appearance?",
      answers: [
        {
          text: "	October 27, 2012",
          correct: false,
        },
        {
          text: "	May 27, 2009",
          correct: false,
        },
        {
          text: "	October 12, 2011",
          correct: false,
        },
        {
          text: "	October 20, 2010",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "When was Mayar born?",
      answers: [
        {
          text: "2002",
          correct: false,
        },
        {
          text: "2001",
          correct: true,
        },
        {
          text: "1999",
          correct: false,
        },
        {
          text: "2000",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );
  let [questionnum, setquestionnum] = useState(1);
  let [stop, setstop] = useState(true);
  let [stoptimer, setstoptimer] = useState("");
  let [earned, setearned] = useState("$ 100");
  let [usename, setUsername] = useState(false);
  let [winer, setwiner] = useState(true);
  let [showSmull, setShowSmull] = useState(false);

  useEffect(() => {
    if (questionnum > 1) {
      setearned(moneyPyramid.find((m) => m.id === questionnum - 1).amount);
    } else {
      setearned("$ 0");
    }
  }, [setearned, moneyPyramid, questionnum]);

  let refreshfn = () => {
    setstop(true);
    setquestionnum(1);
    setwiner(true);
  };

  let showinsmullfn = () => {
    setShowSmull(!showSmull);
  };

  return (
    <div className="App ">
      {winer && usename ? (
        <div className="row">
          {stop ? (
            <Fragment>
              <div className="col-lg-9 col-md-12 fff">
                <div className="logic-milion">
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setstop={setstop}
                        questionnum={questionnum}
                        setstoptimer={setstoptimer}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivial
                      data={data}
                      setquestionnum={setquestionnum}
                      questionnum={questionnum}
                      setstop={setstop}
                      stoptimer={stoptimer}
                      setwiner={setwiner}
                    />
                  </div>
                </div>
              </div>

              <TbArrowBigLeftLines
                size={40}
                className="icon-show"
                onClick={showinsmullfn}
              />
              <div className={showSmull ? "title-show xxx" : "title-show"}>
                <ul className="list-unstyled sidebar-moeny ">
                  {moneyPyramid.map((e) => {
                    return (
                      <div
                        className={
                          questionnum === e.id
                            ? "box-money active"
                            : "box-money"
                        }
                        key={e.id}
                      >
                        <li className="number-q">{e.id}</li>
                        <li className="money-q">{e.amount}</li>
                      </div>
                    );
                  })}
                  <TbArrowBigRightLine
                    className="icon-closee "
                    onClick={showinsmullfn}
                  />
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 ddd">
                <ul className="list-unstyled sidebar-moeny ">
                  {moneyPyramid.map((e) => {
                    return (
                      <div
                        className={
                          questionnum === e.id
                            ? "box-money active"
                            : "box-money"
                        }
                        key={e.id}
                      >
                        <li className="number-q">{e.id}</li>
                        <li className="money-q">{e.amount}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="lost">
                <h2 className="text-center">Good luck next {usename}☹️</h2>
                <p className="text-center mt-3  fw-light fs-5 ">
                  You eanred : {earned}
                </p>
                <IoMdRefresh
                  className="lost-icon mt-3"
                  size={40}
                  onClick={refreshfn}
                />
              </div>
            </Fragment>
          )}
        </div>
      ) : (
        <User setUsername={setUsername} />
      )}
      {!winer && (
        <div className="lost">
          <h1>Well played you earned Milion Dolar 🎉🎉🎉</h1>
          <IoMdRefresh
            className="lost-icon mt-3"
            size={40}
            onClick={refreshfn}
          />
        </div>
      )}
    </div>
  );
}

export default App;
