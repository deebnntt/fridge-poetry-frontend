import React from 'react'
import searchIcon from '../search.svg'

class Search extends React.Component {

  handleChange = (e) => {
    let searchTerm = e.target.value
    console.log(searchTerm)
    this.props.handleChange(searchTerm)
  }

  render() {

    return (
      <div className="search-div">
        <input type="text" className="search" onChange={this.handleChange} /><img src={searchIcon} className="search-icon" alt=""/>
      </div>
    )
  }
}

export default Search
