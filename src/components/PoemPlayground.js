import React from 'react';
import WordDiv from './WordDiv.js'
import SaveButton from './SaveButton.js'
import { connect } from 'react-redux';
import { createPoem, resetNewPoemCreated } from '../actions/poems.js'
import { Redirect } from 'react-router'

class PoemPlayground extends React.Component {

	eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  constructor(props) {
    super(props)
    this.state = {
      position: {
        x: null, y: null
      },
			poem: [],
			submitted: false
    }
  }

  handleDrag = (e) => {
		console.log(e)
    this.setState({
      position: {
        x: (e.x - e.offsetX),
        y: (e.y - e.offsetY),
      },
    });
  }

  onStop = (position, word) => {
		let posx = position.x
		let posy = position.y
		let w = word
		let poemWord = { text: w, x: posx, y: posy }

		let poemArray = this.state.poem
		let filtered = poemArray.filter(word => word.text !== w)
		let poems = filtered.concat(poemWord)

		console.log(poemWord)
    this.setState({
			poem: poems
		});
  }

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.poem)
		const array = this.state.poem
		const data =
			{
			  "poem": {
			  	"magnet": array
			  }
			}
		this.props.createPoem(data)
	}

	componentWillUnmount = () => {this.props.resetNewPoemCreated()}

  render() {

		const mappedWords = this.props.words.map((w, index) => {
			return <WordDiv ref="child" word={w} value={w} key={index} onStart={this.onStart} onStop={this.onStop}  handleDrag={this.handleDrag} position={this.state.position} />
		})

		const id = this.props.currentPoem
		const url = `poems/${id}`

		return(
			<div>
				{mappedWords}
				<SaveButton handleSubmit={this.handleSubmit}/>
					{(this.props.newPoemCreated) ? <Redirect push to={url} id={id} /> : null}
			</div>
		)
  }
}

const mapStateToProps = (state) => {
  return {
    newPoemCreated: state.poem.newPoemCreated
  }
}

function mapDispatchToProps(dispatch){
  return ({
    createPoem: (params) => dispatch(createPoem(params)),
		resetNewPoemCreated: () => dispatch(resetNewPoemCreated()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PoemPlayground)
