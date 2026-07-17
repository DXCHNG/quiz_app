import { useState } from "react";
import ProgressBar from "./component/ProgressBar";
import Question from "./component/Question";
import allQuestions from "./questions";
import ResultSheet from "./component/ResultSheet";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false)
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  
  const currentQuestion = allQuestions[currentIndex];
  function handleNextQuestion() {
    if (currentIndex < (allQuestions.length - 1)) {
      setCurrentIndex((previousIndex) => previousIndex + 1);
    } else {
      setCurrentIndex((previousIndex) => (previousIndex = 0));
      setQuizFinished((previousValue) => (previousValue = true))
    }
  }
  
  return (
    <div className="bg-black min-h-screen items-center justify-center flex flex-col">
      <div className="flex flex-col px-4 py-5 max-w-xl w-full">
        <div className="text-center flex flex-col">
          <a className="text-teal-300 uppercase">Refiner Tech Academy</a>
          <a className="text-white font-bold text-2xl mt-3">
            Web Dev Quick Quiz
          </a>
        </div>
       {quizFinished ? 
       (<ResultSheet 
        totalCorrectAnswer={totalCorrectAnswer }
        totalQuestions={allQuestions.length}
        restartQuiz={() => setQuizFinished((previousValue) => previousValue= false)}></ResultSheet>) : 
       (<><ProgressBar
          currentIndex={currentIndex}
          totalNoOfQuestions={allQuestions.length}
        ></ProgressBar>
        <Question currentQuestion={currentQuestion}
        nextQuestionCount={currentIndex}
        correctAnswer={() => setTotalCorrectAnswer((previousCOrrectAnswer) => previousCOrrectAnswer + 1)}
        ></Question>
        <button
          onClick={handleNextQuestion}
          className="hover:text-white hover:bg-red-400 text-black font-bold border rounded-lg bg-green-400 py-2 mt-3 "
        >
          Next Question
        </button></>)}
        
      </div>
    </div>
  );
}
export default App;
