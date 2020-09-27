import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const START_TIME = 5;
  const textAreaRef = useRef(null);

  const [letter, setLetter] = useState('');
  const [timer, setTimer] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (isTimeRunning && timer > 0) {
      setTimeout(() => {
        setTimer((time) => time - 1);
      }, 1000);
    } else if (timer === 0) {
      endTimer();
    }
  }, [timer, isTimeRunning]);

  const handleChange = (e) => {
    const { value } = e.target;
    setLetter(value);
  };

  const countWord = (text) => {
    const textArr = text.trim().split(' ');
    const filteredArr = textArr.filter((word) => word !== '');
    console.log(filteredArr.length);
    return filteredArr.length;
  };

  const startTimer = () => {
    setIsTimeRunning(true);
    setLetter('');
    setTimer(START_TIME);
    setWordCount(0);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };
  const endTimer = () => {
    setIsTimeRunning(false);
    setWordCount(countWord(letter));
  };

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
