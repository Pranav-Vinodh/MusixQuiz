import { useState, useEffect } from "react";
import { quizData } from "../data/quizData";
import YouTube from "react-youtube";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [error, setError] = useState(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * quizData.length)
  );

  // Get current song and its questions
  const currentSong = quizData[currentSongIndex];
  const questions = currentSong.questions;

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      // Only show 5 questions
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    // Pick a new random song, making sure it's different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quizData.length);
    } while (newIndex === currentSongIndex);
    setCurrentSongIndex(newIndex);
  };

  const onPlayerReady = (event) => {
    setPlayer(event.target);
    event.target.setVolume(50);
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="quiz-container">
      <div className="score-tracker">
        <h3>Score: {score}</h3>
      </div>
      {showScore ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of 5</p>
          <button onClick={restartQuiz} className="restart-button">
            New Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1} of 5</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="audio-controls">
            <YouTube
              videoId={currentSong.youtubeId}
              opts={opts}
              onReady={onPlayerReady}
            />
            <button onClick={togglePlay} className="play-button">
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default Quiz;
