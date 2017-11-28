import React from 'react'
import PoemPlayground from './PoemPlayground.js'
import { connect } from "react-redux";
import { fetchWords } from "../actions/words.js";

class CreateContainer extends React.Component {

  componentDidMount() {
		this.props.fetchWords()
	}

  render() {
    return (
        <div className="container-div">
          <PoemPlayground className="playground" words={this.props.words} currentPoem={this.props.currentPoem}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPoem: state.poem.currentPoem,
    words: state.words.words,
    isLoading: state.words.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: () => {
      dispatch(fetchWords());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
