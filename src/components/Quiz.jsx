import React, { useState, useContext } from "react";
import "../App.css";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/QuizContext";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { setGameState, score, setScore } = useContext(QuizContext);

  const nextClick = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  };

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <br />
      <button onClick={() => chooseOption("A")}>
        {Questions[currentQuestion].optionA}
      </button>
      <button onClick={() => chooseOption("B")}>
        {Questions[currentQuestion].optionB}
      </button>
      <button onClick={() => chooseOption("C")}>
        {Questions[currentQuestion].optionC}
      </button>
      <button onClick={() => chooseOption("D")}>
        {Questions[currentQuestion].optionD}
      </button>
      <br />
      <div>
        {currentQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextClick}>Next Button</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
