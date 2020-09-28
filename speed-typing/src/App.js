import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import useTypeWord from './components/hook/useTypeWord';

function App() {
  const {
    textAreaRef,
    letter,
    handleChange,
    isTimeRunning,
    timer,
    wordCount,
    startTimer,
  } = useTypeWord(10);

  return (
    <>
      <h1>How Fast Can You Type?</h1>
      <textarea
        ref={textAreaRef}
        placeholder='Type here....'
        value={letter}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {timer}</h4>
      <button onClick={() => startTimer()} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count:{wordCount}</h1>
    </>
  );
}

export default App;
