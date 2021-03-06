import React from 'react'
import PoemCard from './PoemCard.js'
import { connect } from "react-redux";
import { fetchPoems, resetNewPoemCreated } from "../../actions/poems.js";
import { fetchCurrentUser } from "../../actions/users.js"
import Search from './Search.js';
import poemParser from '../../services/poemParser.js'
import addLike from '../../actions/likes.js'

class CommunityContainer extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        searchTerm: null,
        username: null
      }
  }

  componentDidMount() {
		this.props.fetchPoems()
    if (!this.props.currentUser.id) {
      this.props.fetchCurrentUser()
    }
	}

  handleChange = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  handleLike = (poemId) => {
    const userId = this.props.currentUser.id
    const data = {
      "poem_id": poemId,
      "user_id": userId
    }
    this.props.addLike(data)
  }

  handleClick = (event) => {
    let username = event.target.innerHTML
    this.setState({
      username: username
    })
  }

  handleShowAll = () => {
    this.setState({
      username: null,
      searchTerm: null
    })
  }

  filterForUser = () => this.props.poems.poems.filter((p) => {
    return p.user_id !== this.props.currentUser.id
  })

  filteredPoems = () => this.filterForUser().filter((p) => {
    const magnetArray = p.magnets
    const bucketed = poemParser.digest(magnetArray)
    const stringifiedPoem = poemParser.sortRows(bucketed)

    if (this.state.searchTerm) {
        return stringifiedPoem.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || p.title !== null && p.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    } else if (this.state.username) {
        return p.user.username === this.state.username
    } else {
      return p
    }
  })

  mappedPoems = () => this.filteredPoems().map((p, index) => {
    return <PoemCard className="poem-card" key={index} poemTitle={p.title} poemId={p.id} magnets={p.magnets} color={p.color} user={p.user.username} handleClick={this.handleClick} likes={p.likes.length} handleLike={this.handleLike}/>
  })

  render() {

    return (
      <div className="list-container">
        <Search handleChange={this.handleChange}/>
        <div className="showall" onClick={this.handleShowAll}><p className="showall-link">show all</p></div>
          <div className="card-container">
          {this.props.poems.poems ? this.mappedPoems() : null}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    poems: state.poem,
    poemDeleted: state.poem.poemDeleted,
    currentUser: state.user.currentUser,
    likeAdded: state.poem.likeAdded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPoems: () => {
      dispatch(fetchPoems())
    },
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser())
    },
    addLike: (params) => {
      dispatch(addLike(params))
    },
    resetNewPoemCreated: () => {
      dispatch(resetNewPoemCreated())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)
