import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isClicked: false}

  onClicked = () => {
    const {isClicked} = this.state
    if (isClicked) {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    } else {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    }
  }

  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                itemsDetails={eachItem}
                isClicked={this.onClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
