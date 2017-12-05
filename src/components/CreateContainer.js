import React from 'react'
import PoemPlayground from './PoemPlayground.js'
import { connect } from "react-redux";
import { fetchWords } from "../actions/words.js"
import { fetchCurrentUser } from "../actions/users.js"

class CreateContainer extends React.Component {

  componentDidMount() {
		this.props.fetchWords()
    if (!this.props.currentUser.id) {
      console.log("i'm doing something")
      this.props.fetchCurrentUser()
    }
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
  console.log(state)
  return {
    currentPoem: state.poem.currentPoem,
    words: state.words.words,
    isLoading: state.words.isLoading,
    currentUser: state.user.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWords: () => {
      dispatch(fetchWords());
    },
    fetchCurrentUser: (id) => {
      dispatch(fetchCurrentUser(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
