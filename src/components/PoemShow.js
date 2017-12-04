import React from 'react';
import MagnetDiv from './MagnetDiv.js'
import { connect } from 'react-redux';
import { fetchPoem, deletePoem, resetPoemDeleted } from "../actions/poems.js"
import TitleCard from './TitleCard.js'
import ShareCard from './ShareCard.js'
import ColorCard from './ColorCard.js'
import poemParser from '../services/poemParser.js'
import DeleteButton from './DeleteButton.js'
import { Redirect } from 'react-router'


class PoemShow extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchPoem(id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.poem) {
      if (this.props.poem.title !== nextProps.poem.title) {
        this.props.fetchPoem(this.props.match.params.id)
      }
      if (this.props.poem.color !== nextProps.poem.color) {
        this.setState({
          background: nextProps.poem.color
        })
      }
    }
  }

  componentWillUnmount() {
   this.props.resetPoemDeleted()
  }

  parsedPoems = () => {
   const magnetArray = this.props.poem.magnets
   const bucketed = poemParser.digest(magnetArray)
   const stringifiedPoem = poemParser.sortRows(bucketed)
   return stringifiedPoem
  }

  handleDelete = () => {
    let id = this.props.match.params.id
    this.props.deletePoem(id)
    console.log("deleting")
  }

  mappedMagnets = () => this.props.poem.magnets.map((m, index) => {
    return <MagnetDiv key={index} word={m.text} left={m.x} top={m.y} background={this.props.poem.color}/>
  })

  render() {

		return(
			<div style={{"postion": "absolute"}}>
        {this.props.poem ? this.mappedMagnets() : null}
        <TitleCard poemId={this.props.match.params.id}/>
        <ShareCard text={this.props.poem ? this.parsedPoems() : null} />
        <ColorCard poemId={this.props.match.params.id} handleChangeComplete={this.handleChangeComplete}/>
        <DeleteButton handleDelete={this.handleDelete}/>
        {this.props.poemDeleted ? <Redirect push to="/list" /> : null}
			</div>
		)
  }
}

function mapStateToProps(state) {
  return {
    poem: state.poem.poem,
    poemDeleted: state.poem.poemDeleted
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    fetchPoem: (id) => {
      dispatch(fetchPoem(id));
    },
    deletePoem: (id) => {
      dispatch(deletePoem(id))
    },
    resetPoemDeleted: () => {
      dispatch(resetPoemDeleted())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoemShow)
