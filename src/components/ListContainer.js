import React from 'react'
import PoemCard from './PoemCard.js'
import { connect } from "react-redux";
import { fetchPoems } from "../actions/poems.js";
import Search from './Search.js';

class ListContainer extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        searchTerm: null
      }
  }

  componentDidMount() {
		this.props.fetchPoems()
	}

  handleChange = (search) => {
    this.setState({
      searchTerm: search
    })
    console.log(this.state.searchTerm)
  }

  filteredPoems = () => this.props.poems.poems.filter((p) => {
    if (this.state.searchTerm) {
      return p.magnets.map(t => t.text.toLowerCase()).includes(this.state.searchTerm.toLowerCase()) || p.title !== null && p.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    } else {
      return p
    }
  })

  mappedPoems = () => this.filteredPoems().map((p, index) => {
    return <PoemCard className="poem-card" key={index} poemTitle={p.title} poemId={p.id} magnets={p.magnets}/>
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
    poems: state.poem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPoems: () => {
      dispatch(fetchPoems());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
