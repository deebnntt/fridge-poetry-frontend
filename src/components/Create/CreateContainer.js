import React from 'react'
import PoemPlayground from './PoemPlayground.js'
import { connect } from "react-redux";
import { fetchWords } from "../../actions/words.js"
import { fetchCurrentUser } from "../../actions/users.js"

class CreateContainer extends React.Component {

  componentDidMount() {
		this.props.fetchWords()
    if (!this.props.currentUser.id) {
      this.props.fetchCurrentUser()
    }
  }

  render() {
    return (
        <div className="container-div">
          <PoemPlayground className="playground" id={this.props.currentUser.id} words={this.props.words} currentPoem={this.props.currentPoem}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
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
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
