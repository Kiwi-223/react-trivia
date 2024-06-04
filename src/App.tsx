import "./App.css";
// import triviaList from "./assets/triviaList";
import { Question } from "./componants/Question";

function App() {
  return (
    <>
      <div className="mainHead">
        <h1> Trivia</h1>
      </div>
      <div className="content">
        <div className="card">
          <Question qIndex={0}></Question>

        </div>
      </div>
    </>
  );
}

export default App;
