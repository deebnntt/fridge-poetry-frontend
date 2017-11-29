import React from 'react';
import MagnetDiv from './MagnetDiv.js'
import { connect } from 'react-redux';
import { fetchPoem } from "../actions/poems.js"

class PoemShow extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchPoem(id)
  }

  mappedMagnets = () => this.props.poem.magnets.map((m, index) => {
    const newY = (m.y - 300)
    return <MagnetDiv key={index} word={m.text} left={m.x} top={newY}/>
  })

  render() {

		return(
			<div style={{"postion": "absolute"}}>
        {this.props.poem ? this.mappedMagnets() : null}
			</div>
		)
  }

}

function mapStateToProps(state) {
  return {
    poem: state.poem.poem
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    fetchPoem: (id) => {
      dispatch(fetchPoem(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoemShow)
