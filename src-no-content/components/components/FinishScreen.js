function FinishScreen({ dispatch, points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "💯🏆";
  if (percentage >= 80 && percentage < 100) emoji = "⭐";
  if (percentage >= 70 && percentage < 80) emoji = "😏";
  if (percentage >= 0 && percentage < 70) emoji = "🙁";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%) points.
      </p>
      <p className="highscore">(High score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
