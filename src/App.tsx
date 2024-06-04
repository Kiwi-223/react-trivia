import { useState } from "react";
import "./App.css";
// import triviaList from "./assets/triviaList";
import { Question } from "./componants/Question";
import { MoveButton } from "./componants/moveButton";

function App() {
  const [cardIndex, setCardIndex] = useState(2);
  return (
    <>
      <div className="mainHead">
        <h1> Trivia</h1>
      </div>

      <div className="content">
        <MoveButton
          name="Previous"
          onClick={() => setCardIndex(cardIndex - 1)}
        ></MoveButton>{" "}
        {/*move to previous*/}
        <div className="card">
          <Question qIndex={cardIndex}></Question>
        </div>
        {/* <MoveButton name="Next" onClick={}></MoveButton>  */}
        {/*move to next*/}
      </div>
    </>
  );
}

export default App;
