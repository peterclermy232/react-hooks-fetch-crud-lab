import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;
// mapping all our answer
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
// create handleDeleteClick function
  function handleDeleteClick() {
    onDeleteClick(id);
  }
// create a functon which 
  function handleAnswerChange(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
