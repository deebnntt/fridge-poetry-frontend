import React from 'react'
import PoemCard from './PoemCard.js'
import { connect } from "react-redux";
import { fetchPoems } from "../../actions/poems.js";
import { fetchCurrentUser } from "../../actions/users.js"
import Search from './Search.js';
import poemParser from '../../services/poemParser.js'

class ListContainer extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        searchTerm: null
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

  filterForUser = () => this.props.poems.poems.filter((p) => {
    return p.user_id === this.props.currentUser.id
  })

  filteredPoems = () => this.filterForUser().filter((p) => {
    const magnetArray = p.magnets
    const bucketed = poemParser.digest(magnetArray)
    const stringifiedPoem = poemParser.sortRows(bucketed)

    if (this.state.searchTerm) {
        return stringifiedPoem.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || p.title !== null && p.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    } else {
      return p
    }
  })

  mappedPoems = () => this.filteredPoems().map((p, index) => {
    return <PoemCard className="poem-card" key={index} poemTitle={p.title} poemId={p.id} magnets={p.magnets} color={p.color}/>
  })

  render() {

    return (
      <div className="list-container">
        <Search handleChange={this.handleChange}/>
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
    currentUser: state.user.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPoems: () => {
      dispatch(fetchPoems());
    },
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
