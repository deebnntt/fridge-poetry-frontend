import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import WordDiv from './WordDiv.js'
import SaveButton from './SaveButton.js'

class PoemPlayground extends React.Component {

	eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  constructor(props) {
    super(props)
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: null, y: null
      },
			poem: [{}],
    }
  }

  handleDrag = (e) => {
    this.setState({
      deltaPosition: {
        x: e.x,
        y: e.y,
      },
    });
  }

  onStart = () => {
    this.setState({
      activeDrags: ++this.state.activeDrags
      }
    );
  }

  onStop = (position, word) => {
		let pos = position
		let w = word
		let poemWord = { word: w, position: {pos}}
		console.log(poemWord)
    this.setState({
			activeDrags: --this.state.activeDrags,
			poem: this.state.poem.concat(poemWord)
		});
  }

	handleSubmit = () => {
		console.log(this.state.poem)
	}


  render() {

		const {deltaPosition} = this.state;

		const mappedWords = this.props.words.map((w, index) => {
			return <WordDiv ref="child" word={w} value={w} key={index} onStart={this.onStart} onStop={this.onStop}  position={deltaPosition} handleDrag={this.handleDrag} />
		})

		return(
			<div>
				{mappedWords}
				<SaveButton handleSubmit={this.handleSubmit}/>
			</div>
		)
  }

}

export default PoemPlayground
