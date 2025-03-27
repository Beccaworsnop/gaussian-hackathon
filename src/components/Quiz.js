import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";

const questionsData = [
  {
    question: "How does climate change affect sea turtles?",
    choices: [
      "A) It changes the temperature of their nesting sites.",
      "B) It makes them migrate to the Arctic.",
      "C) It increases their food supply.",
      "D) It has no effect on them."
    ]
  },
  {
    question: "What is the biggest threat to ocean life?",
    choices: [
      "A) Overfishing",
      "B) Plastic pollution",
      "C) Rising temperatures",
      "D) All of the above"
    ]
  }
];

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questionsData.length);
  };

  return (
    <div className="quiz-container">
      <Question
        question={questionsData[questionIndex].question}
        choices={questionsData[questionIndex].choices}
      />
      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>
      <Timer />
    </div>
  );
};

export default Quiz;
