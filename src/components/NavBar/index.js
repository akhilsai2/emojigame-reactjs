import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, top} = this.props
    const gameScore = score
    return (
      <nav className="NavContainer">
        <div className="imgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="head">Emoji Game</h1>
        </div>
        {gameScore !== 12 ? (
          <div className="score-cont">
            <p className="score">Score: {gameScore}</p>
            <p className="score">Top Score: {top}</p>
          </div>
        ) : (
          ''
        )}
      </nav>
    )
  }
}
export default NavBar
