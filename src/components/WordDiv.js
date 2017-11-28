import React from 'react'
import Draggable from 'react-draggable';

class WordDiv extends React.Component {

  handleClick = () => {
    const val = this.props.position
    this.props.handleClick(val)
  }

  handleStart = () => {
    const state = this.state
    this.props.onStart(state)
  }

  handleStop = () => {
    const position = this.props.position
    const word = this.props.word
    this.props.onStop(position, word)
  }

  render() {

    return (
      <Draggable onStart={this.props.onStart} onStop={this.handleStop} onDrag={this.props.handleDrag}>
        <div className='word'>
          {this.props.word}
        </div>
      </Draggable>
    )
  }
}

export default WordDiv
