import "./App.css";
import { useState } from "react";
import { MoveButton } from "./componants/MoveButton";
import triviaList from "./assets/triviaList";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const curentQ = triviaList[questionIndex];
  const [color, setColor] = useState("primary");
  const handleAnswer = (answer: string, choice: string) => {
    console.log(choice);
    if (choice === answer) {
    }
  };
  return (
    <>
      <div className="mainHead">
        <h1>Disney Trivia</h1>
        <button onClick={() => setQuestionIndex(0)}>Reset</button>
      </div>
      <div>
        {/* add incorret/correct/blank title */}
        {/* also att current score and top score here */}
      </div>
      <div className="content">
        {/*move to previous*/}
        {questionIndex != 0 ? (
          <MoveButton
            name="Previous"
            onClick={() => setQuestionIndex(questionIndex - 1)}
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
            onClick={() => setQuestionIndex(questionIndex + 1)}
          ></MoveButton>
        ) : (
          <p></p>
        )}
      </div>
      {/* className="answerContainer" */}
      <div>
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
