import React from 'react';
import MagnetDiv from './MagnetDiv.js'
import { connect } from 'react-redux';
import { fetchPoem, updatedPoem } from "../actions/poems.js"
import TitleCard from './TitleCard.js'
import ShareCard from './ShareCard.js'
import ColorCard from './ColorCard.js'
import poemParser from '../services/poemParser.js'


class PoemShow extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        background: "#FFB6C1"
      }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchPoem(id)
    // this.setState({
    //   background: this.props.poem.color
    // })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.poem) {
      if (this.props.poem.title !== nextProps.poem.title) {
        this.props.fetchPoem(this.props.match.params.id)
      }
    }
   }

  componentWillUnmount() {
   this.props.updatedPoem()
  }

  handleChangeComplete = (background) => {
    this.setState({
      background: background
    })
  }

  parsedPoems = () => {
   const magnetArray = this.props.poem.magnets
   const bucketed = poemParser.digest(magnetArray)
   const stringifiedPoem = poemParser.sortRows(bucketed)
   return stringifiedPoem
  }

  mappedMagnets = () => this.props.poem.magnets.map((m, index) => {
    const backgroundColor = this.state.background
    return <MagnetDiv key={index} word={m.text} left={m.x} top={m.y} background={backgroundColor}/>
  })

  render() {

		return(
			<div style={{"postion": "absolute"}}>
        {this.props.poem ? this.mappedMagnets() : null}
        <TitleCard poemId={this.props.match.params.id}/>
        <ShareCard text={this.props.poem ? this.parsedPoems() : null} />
        <ColorCard handleChangeComplete={this.handleChangeComplete}/>
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
    },
    updatedPoem: () => {
      dispatch(updatedPoem())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PoemShow)
