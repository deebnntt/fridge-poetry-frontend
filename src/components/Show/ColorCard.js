import React from 'react'
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { updatePoem } from '../../actions/poems.js'
import { CirclePicker } from 'react-color';
import dragIcon from '../../drag-icon.png'

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
    "#FFB6C1", "#dda0dd", "#c6e2ff", "#87cefa", "#aeeeee", "#C1FFC1",  "#ffffe0", "#f5f5f5", "#ffe4e1", "#bc8f8f", "#999999", "#b0b0b0",
    "#8470ff", "#ff00ff", "#ff5722", "#ffeb3b", "#cddc39", "#76ee00"
  ]


    return (
      <Draggable handle=".handle">
        <div style={{"position": "absolute", "top":150, "left": 900}}>
            <div className="handle">Color<img src={dragIcon} alt="" className="drag-icon"/></div>
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
