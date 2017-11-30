import React from 'react'
import Draggable from 'react-draggable';
import dragicon from '../drag-icon.png'

class TagCard extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
      <Draggable handle=".handle">
        <div>
          <div style={{"position": "absolute", "top":-20, "left": 650}}>
            <div className="handle"><img src={dragicon} className="drag-icon"/></div>
            <div className="tag-card">
              <h3>TAGS</h3>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default TagCard
