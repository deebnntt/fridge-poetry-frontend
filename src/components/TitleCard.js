import React from 'react'
import Draggable from 'react-draggable';
import TitleForm from './TitleForm.js'
import { connect } from 'react-redux';
import { updatePoem } from '../actions/poems.js'
import dragicon from '../drag-icon.png'

class TitleCard extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        title: null
      }
  }

  componentDidMount() {

	}

  handleSubmit = (input) => {
    const id = this.props.poemId
    this.setState({
      title: input
    })
    const data =
      {
        "title": input
      }
    this.props.updatePoem(id, data)
  }

  render() {
    return (
      <Draggable handle=".handle">
        <div style={{"position": "absolute", "top":150, "left": 50}}>
            <div className="handle"><h3>TITLE</h3></div>
              <div className="title-card">
                <h3>{ this.props.poem ? this.props.poem.title : this.state.title }</h3><br />
                <TitleForm handleSubmit={this.handleSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TitleCard)
