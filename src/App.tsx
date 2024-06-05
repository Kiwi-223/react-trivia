import { useState } from "react";
import "./App.css";
// import triviaList from "./assets/triviaList";
import { Question } from "./componants/Question";
import { MoveButton } from "./componants/moveButton";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <>
      <div className="mainHead">
        <h1> Trivia</h1>
      </div>

      <div className="content">
        {/*move to previous*/}
        {cardIndex != 0 ? (
          <MoveButton
            name="Previous"
            onClick={() => setCardIndex(cardIndex - 1)}
          ></MoveButton>
        ) : (
          <p></p>
        )}

        <div className="card">
          <Question qIndex={cardIndex}></Question>
        </div>
        {/*move to next*/}
        {cardIndex != 19 ? (
          <MoveButton
            name="Next"
            onClick={() => setCardIndex(cardIndex + 1)}
          ></MoveButton>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default App;
