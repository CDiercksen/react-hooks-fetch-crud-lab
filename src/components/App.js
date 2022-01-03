import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  };

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => 
    question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  };

  function handleQuestionUpdate(updatedAnswer) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedAnswer.id) {
        return updatedAnswer;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
          onAddQuestion={handleAddQuestion} /> 
          : <QuestionList 
            questions={questions} 
            onDeleteQuestion={handleDeleteQuestion}
            onUpdateQuestion={handleQuestionUpdate} />}
    </main>
  );
}

export default App;
