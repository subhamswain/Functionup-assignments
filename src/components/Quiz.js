import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    // Timer logic
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        submitQuiz(); // Automatically submit the quiz when time is finished
      }
    }, 1000); // Update time remaining every second

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [timeRemaining]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      submitQuiz();
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 2); // Assign 2 marks for each correct answer
    }
  };

  const submitQuiz = () => {
    setShowResult(true);
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setTimeRemaining(600); // Reset the timer to 10 minutes
  };

  const PassingMarks = 12;
  const isPassing = score >= PassingMarks;

  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length * 2} tryAgain={resetAll} isPassing={isPassing} PassingMarks={PassingMarks} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </>
        )}
      </div>
      <div className="timer">Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}</div>
    </div>
  );
}

export default Quiz;
