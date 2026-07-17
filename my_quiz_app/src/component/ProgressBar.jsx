function ProgressBar({currentIndex, totalNoOfQuestions}) {
  const percentage = Math.round((currentIndex + 1)/ totalNoOfQuestions *100) 
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between mt-8">
        <a className="text-white/40">Question {currentIndex + 1} of {totalNoOfQuestions}</a>
        <a className="text-white/40">{percentage}%</a>
      </div>
      <div className="bg-white/20 min-h-1.5 rounded-full mt-3">
        <div
          className="bg-green-400 min-h-1.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
        
      </div>
    </div>
  );
}
export default ProgressBar;
