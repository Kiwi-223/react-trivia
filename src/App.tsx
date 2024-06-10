import "./App.css";
import { useState } from "react";
import { MoveButton } from "./componants/MoveButton";
import triviaList from "./assets/triviaList";
import AnswerAlert from "./componants/answerAlert";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const curentQ = triviaList[questionIndex];
  const [answerAlert, setAnswerAlert] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const handleReset = () => {
    handleMove("Reset");
    setAnswerAlert(false);
    setScore(0);
  };
  const handleMove = (direction: string) => {
    if (direction === "Next") {
      setQuestionIndex(questionIndex + 1);
    }
    if (direction === "Previous") {
      setQuestionIndex(questionIndex - 1);
    }
    if (direction === "Reset") {
      setQuestionIndex(0);
    }
    setAnswerAlert(false);
  };

  //
  const handleAnswer = (answer: string, choice: string) => {
    // console.log(choice);
    setAnswerAlert(true);
    if (choice === answer && answerAlert != true) {
      setCorrectAnswer(true);
      setScore(score + 1);
    } else {
      if (answerAlert != true) {
        setCorrectAnswer(false);
      }
    }
  };

  return (
    <>
      <div className="mainHead">
        <p>Question {questionIndex}/20</p>
        <p>Score: {score}/20</p>
        <h1>Disney Trivia</h1>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <div>
        {answerAlert && (
          <AnswerAlert
            answer={curentQ.answer}
            choice={correctAnswer}
          ></AnswerAlert>
        )}
      </div>
      <div className="content">
        {/*move to previous*/}
        {questionIndex != 0 ? (
          <MoveButton
            name="Previous"
            onClick={() => handleMove("Previous")}
          ></MoveButton>
        ) : (
          <p></p>
        )}
        <div className="card">
          <h2>{triviaList[questionIndex].question}</h2>
        </div>

        {/*move to next*/}
        {questionIndex != 19 ? (
          <MoveButton
            name="Next"
            onClick={() => handleMove("Next")}
          ></MoveButton>
        ) : (
          <p></p>
        )}
      </div>
      <div className="answerContainer">
        {curentQ.options.map((option) => {
          return (
            <button onClick={() => handleAnswer(curentQ.answer, option)}>
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
