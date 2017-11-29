import React, { Component } from 'react'
import Draggable from 'react-draggable';

class TagCard extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
      <Draggable>
        <div className="tag-card" style={{"marginLeft": 750}}>
          <p>Tags (Enter Here)</p>
        </div>
      </Draggable>
    )
  }
}

export default TagCard
