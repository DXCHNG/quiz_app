function Options({
  option,
  isSelected,
  isCorrect,
  isAttempted,
  isOptionClicked,
}) {
  let colour = "bg-black";
  if (isAttempted == false) {
    colour = "bg-black";
  } else if (isAttempted == true && isSelected == true && isCorrect == false) {
    colour = "bg-red-600";
  } else if (isAttempted == true && isCorrect == true) {
    colour = "bg-green-600";
  } else {
    colour = "bg-black";
  }
  return (
    <div
      className={`py-3 px-2 border border-white/20 hover:border-emerald-600  rounded-lg ${colour}`}
    >
      <button onClick={isOptionClicked} className="text-white w-full text-left">
        {option}
      </button>
    </div>
  );
}
export default Options;
