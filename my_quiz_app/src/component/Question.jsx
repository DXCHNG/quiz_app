import { useEffect, useState } from "react";
import Options from "./Options";

function Question({nextQuestionCount, currentQuestion, correctAnswer, questionAttempted }) {
  const [optionClicked, setOptionClicked] = useState(100);
  useEffect(() => {
    setOptionClicked((previousValue) => previousValue = 100)
    
  }, [nextQuestionCount])
  return (
    <div className=" bg-white/5 flex flex-col py-3 px-2 mt-8">
      <div className="  px-2 py-4">
        <a className=" text-white font-bold text-lg">
          {currentQuestion.question}
        </a>
      </div>
      <div className=" flex flex-col gap-4">
        <Options
          isOptionClicked={() => { if(optionClicked !==100) return;
            setOptionClicked((previousValue) => (previousValue = 0));
            questionAttempted()
            if(currentQuestion.correctAnswer == currentQuestion.options[0]) {correctAnswer()}
          }}
          isSelected={optionClicked == 0}
          isAttempted={optionClicked != 100}
          isCorrect={
            currentQuestion.correctAnswer == currentQuestion.options[0]
          }
          option={currentQuestion.options[0]}
        ></Options>
        <Options
          isOptionClicked={() => { if(optionClicked !==100) return;setOptionClicked(
            (previousValue) => (previousValue = 1));
            questionAttempted()
            if(currentQuestion.correctAnswer == currentQuestion.options[1]) {correctAnswer()}
          }}
          isSelected={optionClicked == 1}
          isAttempted={optionClicked != 100}
          isCorrect={
            currentQuestion.correctAnswer == currentQuestion.options[1]
          }
          option={currentQuestion.options[1]}
        ></Options>
        <Options
          isOptionClicked={() => {if(optionClicked !==100) return;setOptionClicked(
            (previousValue) => (previousValue = 2));
            questionAttempted()
            if(currentQuestion.correctAnswer == currentQuestion.options[2]) {correctAnswer()}
          }}
          isSelected={optionClicked == 2}
          isAttempted={optionClicked != 100}
          isCorrect={
            currentQuestion.correctAnswer == currentQuestion.options[2]
          }
          option={currentQuestion.options[2]}
        ></Options>
        <Options
          isOptionClicked={() => {if(optionClicked !==100) return;setOptionClicked(
            (previousValue) => (previousValue = 3));
            questionAttempted()
            if(currentQuestion.correctAnswer == currentQuestion.options[3]) {correctAnswer()}
          }}
          isSelected={optionClicked == 3}
          isAttempted={optionClicked != 100}
          isCorrect={
            currentQuestion.correctAnswer == currentQuestion.options[3]
          }
          option={currentQuestion.options[3]}
        ></Options>
      </div>
    </div>
  );
}
export default Question;
