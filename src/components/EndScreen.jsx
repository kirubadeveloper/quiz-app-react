import React from "react";
import "../App.css";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/QuizContext";
import { useContext } from "react";

const EndScreen = () => {
  const { score, setGameState, setScore, userName } = useContext(QuizContext);
  console.log("sccc", score);
  const resetQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h2>Finished Quiz</h2>
      <br />
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <div>
        <button onClick={resetQuiz}>Reset Quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;
