import React, { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./helpers/QuizContext";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Quiz App</h2>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          userName,
          setUserName,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

