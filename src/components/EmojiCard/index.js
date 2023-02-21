import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {item, clickEmoji} = this.props
    const {id, emojiName, emojiUrl} = item
    const clicking = () => {
      clickEmoji(id)
    }
    return (
      <li className="listCont">
        <button className="button1" type="button">
          <img
            src={emojiUrl}
            className="emoji"
            alt={emojiName}
            onClick={clicking}
          />
        </button>
      </li>
    )
  }
}
export default EmojiCard
