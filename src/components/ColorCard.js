import React from 'react'
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { updatePoem } from '../actions/poems.js'
import { CirclePicker } from 'react-color';

class ColorCard extends React.Component {

  handleChangeComplete = (color, event) => {
    let id = this.props.poemId
    const data =
      {
        "color": color.hex
      }
    this.props.updatePoem(id, data)
  }

  render() {

  const colors = [
    "#FFB6C1", "#dda0dd", "#f5f5f5", 	"#aeeeee", "#c6e2ff", "#87cefa", "#ffe4e1", "#bc8f8f", "#ffffe0", "#ffeb3b", "#999999", "#b0b0b0",
    "#8470ff", "#ff5722", "#ff00ff", "#ffeb3b", "#76ee00", "#cddc39",
  ]

    return (
      <Draggable handle=".handle">
        <div style={{"position": "absolute", "top":150, "left": 900}}>
            <div className="handle"><h3>COLOR</h3></div>
              <div className="color-card">
                <CirclePicker onChangeComplete={ this.handleChangeComplete} colors={colors}/>
              </div>
          </div>
      </Draggable>
    )
  }
}

function mapStateToProps(state) {
  return {
    poem: state.poem.poem
    }
  }

function mapDispatchToProps(dispatch){
  return ({
    updatePoem: (id, data) => dispatch(updatePoem(id, data))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorCard)
