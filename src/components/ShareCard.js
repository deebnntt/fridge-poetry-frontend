import React from 'react'
import Draggable from 'react-draggable';
import dragicon from '../drag-icon.png'

class ShareCard extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
      <Draggable handle=".handle">
        <div>
          <div style={{"position": "absolute", "top":-20, "left": 650}}>
            <div className="handle"><h3>SHARE</h3></div>
              <div className="tag-card">
              <h3>text version:</h3>
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default ShareCard
