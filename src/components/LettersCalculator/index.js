import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {c: 0}

  ac = ev => {
    this.setState({c: ev.target.value.length})
  }

  render() {
    const {c} = this.state
    return (
      <div className="min">
        <div>
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="1">Enter the phrase</label>
          <input id="1" type="input" onChange={this.ac} />
          <p>No.of letters: {c}</p>
        </div>
        <div>
          np
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="Letters Calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
