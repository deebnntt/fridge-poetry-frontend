import React, { Component } from 'react'
import PoemPlayground from './PoemPlayground.js'
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWords } from "../actions/words.js";

class CreateContainer extends React.Component {

  componentDidMount() {
		this.props.fetchWords()
	}

  render() {
    return (
        <div className="container-div">
          <h1>fridge poetry</h1>
          <PoemPlayground className="playground" words={this.props.words} currentPoem={this.props.currentPoem}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    currentPoem: state.currentPoem,
    words: state.words,
    isLoading: state.isLoading
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
