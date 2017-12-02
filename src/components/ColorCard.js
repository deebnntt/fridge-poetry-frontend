import React from 'react'
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { updatePoem } from '../actions/poems.js'
import { CirclePicker } from 'react-color';

class ColorCard extends React.Component {

  handleChangeComplete = (color, event) => {
    this.props.handleChangeComplete(color.hex)
  }

  render() {

  const colors = ["#FFB6C1", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]

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
