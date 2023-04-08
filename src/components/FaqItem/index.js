import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {itemsDetails} = this.props
    const {answerText} = itemsDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }

    return null
  }

  toggleOnClick = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {itemsDetails} = this.props
    const {questionText} = itemsDetails
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-btn-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.toggleOnClick}>
            <img src={image} alt={altText} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
