import React from 'react'
import PoemCard from './PoemCard.js'
import { connect } from "react-redux";
import { fetchPoems } from "../actions/poems.js";
import Search from './Search.js'

class ListContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
		this.props.fetchPoems()
	}

  handleChange = () => {

  }

  mappedPoems = () => this.props.poems.poems.map((p, index) => {
    return <PoemCard className="poem-card" key={index} poemId={p.id} magnets={p.magnets}/>
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
