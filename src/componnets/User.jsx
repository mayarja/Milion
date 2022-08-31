import React, { useRef } from "react";

function User({ setUsername }) {
  let inputref = useRef();
  let hnadelclick = () => {
    inputref.current.value && setUsername(inputref.current.value);
  };
  return (
    <div className="inp-box">
      <input type="text" placeholder="type your name" ref={inputref} />
      <button className="btn btn-primary" onClick={hnadelclick}>
        Start Challenge
      </button>
    </div>
  );
}

export default User;
