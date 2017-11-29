import React, { Component } from 'react'
import Draggable from 'react-draggable';

class TitleCard extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
      <Draggable>
        <div className="title-card" style={{"marginLeft": 50}}>
          <p>Poem Title (Enter Here)</p>
        </div>
      </Draggable>
    )
  }
}

export default TitleCard
