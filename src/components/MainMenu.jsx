import React, { useContext } from "react";
import "../App.css";
import { QuizContext } from "../helpers/QuizContext";

const MainMenu = () => {
  const { setGameState, setUserName } = useContext(QuizContext);
  const beginQuiz = () => {
    setGameState("quiz");
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="Menu">
      <label>
        <h2>Enter Your Name:</h2>
      </label>
      <input
        type="text"
        placeholder="Ex. Kiruba V"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button style={buttonStyle} onClick={beginQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
