import { useState, useEffect, useRef } from 'react';

const useTypeWord = (startTime = 5) => {
  const textAreaRef = useRef(null);

  const [letter, setLetter] = useState('');
  const [timer, setTimer] = useState(startTime);
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
    setTimer(startTime);
    setWordCount(0);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };
  const endTimer = () => {
    setIsTimeRunning(false);
    setWordCount(countWord(letter));
  };

  return {
    textAreaRef,
    letter,
    handleChange,
    isTimeRunning,
    timer,
    wordCount,
    startTimer,
  };
};

export default useTypeWord;
