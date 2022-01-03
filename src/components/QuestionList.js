import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem 
          question={question} 
          key={question.id}
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQuestion={onUpdateQuestion}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
