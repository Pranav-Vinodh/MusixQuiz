import { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="quiz-container">
      {!startQuiz ? (
        <div className="landing-page">
          <h1>Music Quiz</h1>
          <p>
            Test your music knowledge! Listen to songs and answer questions
            about them. Each quiz features 5 questions about a randomly selected
            song.
          </p>
          <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
