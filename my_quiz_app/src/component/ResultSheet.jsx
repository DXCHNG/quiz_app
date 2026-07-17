function ResultSheet({restartQuiz, totalCorrectAnswer, totalQuestions}){
  const percentage = Math.round((totalCorrectAnswer)/ totalQuestions *100)
  return(
  <div className="bg-white/10 flex flex-col text-center justify-center items-center px-6 py-10 mt-8 rounded-lg">
    <a className="text-5xl mb-6">📚</a>
    <a className="text-white font-bold text-2xl mb-6">You scored {totalCorrectAnswer} / {totalQuestions}</a>
    <a className="text-blue-400 text-3xl mb-6 font-bold ">{percentage}%</a>
    <a className="text-white/60 mb-6">Keep going! Review this week's material and try again.</a>
    <button onClick={restartQuiz} className="text-black border rounded-lg py-2 px-7 bg-blue-400  hover:bg-blue-600">Restart quix</button>
    
  </div>
)
} 
export default ResultSheet;
