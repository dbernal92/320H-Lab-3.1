import Score from "./Score";

function Learner ({ name, bio, scores }) {
    return (
        <div>
            {/* Display learner's name and bio */}
            <h2>{name}</h2>
            <p>{bio}</p>
            <h3>Scores:</h3>
            <ol>
                 {/* Loop through scores and create a Score component for each */}
                {scores.map((score, index) => (
                    <Score key={index} date={score.date} score={score.score} />
                ))}
            </ol>
        </div>
    )
}

export default Learner;