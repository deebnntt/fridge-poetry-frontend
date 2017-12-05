import React from 'react'
import searchIcon from '../../search.svg'

class Search extends React.Component {

  handleChange = (e) => {
    let searchTerm = e.target.value
    console.log(searchTerm)
    this.props.handleChange(searchTerm)
  }

  render() {

    return (
      <div className="search-card">
      <div className="search-handle">
        Search
        <img src={searchIcon} className="search-icon" alt=""/>
      </div>
      <div className="search-div">
        <input type="text" className="search" onChange={this.handleChange} />
      </div>
      </div>
    )
  }
}

export default Search
