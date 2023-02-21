/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    gameList: [{id: uuidV4(), emojiName: '', emojiUrl: ''}],
    gameScore: 0,
    topScore: 0,
    top: 0,
    WinOrLose: false,
  }

  emoji = id => {
    const {emojisList} = this.props
    const {gameList} = this.state
    const gameEmoji = emojisList.filter(each => each.id === id)
    // console.log(gameEmoji)
    const sameEmoji = gameList.filter(each => each.id === id)
    // console.log(sameEmoji)

    if (sameEmoji.length === 0) {
      this.setState(prevState => ({
        gameList: [...prevState.gameList, ...gameEmoji],
        gameScore: prevState.gameScore + 1,
        topScore: prevState.topScore,
        top: prevState.top + 1,
      }))
    } else {
      this.setState({WinOrLose: true})
    }
  }

  playMode = () => {
    this.setState(prevState =>
      prevState.top > prevState.topScore
        ? {
            gameList: [{id: uuidV4(), emojiName: '', emojiUrl: ''}],
            WinOrLose: false,
            gameScore: 0,
            top: 0,
            topScore: prevState.top,
          }
        : {
            gameList: [{id: uuidV4(), emojiName: '', emojiUrl: ''}],
            WinOrLose: false,
            gameScore: 0,
            top: 0,
            topScore: prevState.topScore,
          },
    )
  }

  render() {
    const {emojisList} = this.props
    const {gameScore, topScore, WinOrLose} = this.state
    let shuffledList = emojisList
    if (WinOrLose === false) {
      shuffledList = emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <>
        <NavBar score={gameScore} top={topScore} />
        <div className="bgContainer">
          {WinOrLose === false && gameScore < 12 ? (
            <ul className="cardCont">
              {shuffledList.map(each => (
                <EmojiCard item={each} key={each.id} clickEmoji={this.emoji} />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              playOneMore={this.playMode}
              score={gameScore}
              top={topScore}
            />
          )}
        </div>
      </>
    )
  }
}
export default EmojiGame
