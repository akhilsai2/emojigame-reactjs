import './index.css'

const WinOrLoseCard = props => {
  const {playOneMore, score} = props
  const gameScore = score

  const playAgain = () => {
    playOneMore()
  }

  return (
    <div className="WinLoseCont">
      <div className="head-cont">
        {gameScore === 12 ? (
          <h1 className="win">You Won</h1>
        ) : (
          <h1 className="win">You Lose</h1>
        )}
        <p className="para-score">Best Score</p>
        {gameScore === 12 ? (
          <p className="para-score-win">12/12</p>
        ) : (
          <p className="para-score-win">{gameScore}/12</p>
        )}
        <button className="button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      {gameScore === 12 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="won"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="won"
        />
      )}
    </div>
  )
}
export default WinOrLoseCard
