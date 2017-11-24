import React from 'react';
import WordDiv from './WordDiv.js'

export default class PoemPlayground extends React.Component {

  render() {
		return(
      <div className="playground-div">
				{this.props.words.map(w => <WordDiv word={w} />)}
      </div>
		)
  }

}

PoemPlayground.defaultProps = {
	// words: []
}
