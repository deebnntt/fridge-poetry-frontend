import React from 'react'
import Draggable from 'react-draggable';

class TagCard extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
      <Draggable handle=".handle">
        <div>
          <div style={{"position": "absolute", "left": 400}}>
            <div className="handle">drag me</div>
            <div className="title-card">
            Tags
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default TagCard
