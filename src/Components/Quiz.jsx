import React from "react";

const Quiz = () => {
  return (
    <div className="QuizBg">
      <div className="quiz-container">
        <div className="quiz-question">
          <h2>Question</h2>
          <p>Which is the only animal that can jump?</p>
        </div>
        <div className="options-container">
          <div className="side1">
            <div className="option">Dog</div>
            <div className="option">Goat</div>
          </div>
          <div className="side2">
            <div className="option">Elephant</div>
            <div className="option">Lion</div>
          </div>
        </div>
        <div className="quiz-controls">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
          <button className="quit-button">Quit</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
