import React from 'react';
import PoemPlayground from './PoemPlayground.js'
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWords } from "./actions/words";

class CreateContainer extends React.Component {

  componentDidMount() {
		this.props.fetchWords()
	}

  render() {
    return (
      <div className="container-div">
        <h1>fridge poetry</h1>
        <PoemPlayground words={this.props.words}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);
