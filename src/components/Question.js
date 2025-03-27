import React from "react";

const Question = ({ question, choices }) => {
  return (
    <div className="question-container">
      <h1>{question}</h1>
      <ul className="choices">
        {choices.map((choice, index) => (
          <li key={index}>
            <input type="radio" name="answer" id={`choice-${index}`} />
            <label htmlFor={`choice-${index}`}>{choice}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
