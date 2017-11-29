import React from 'react'

class Search extends React.Component {

  handleChange = (e) => {
    let searchTerm = e.target.value
    console.log(searchTerm)
    this.props.handleChange(searchTerm)
  }

  render() {

    return (
      <div>
        <input type="text" className="search" onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search
