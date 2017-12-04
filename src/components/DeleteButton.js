import React from 'react'

class DeleteButton extends React.Component {

  render() {

    return (
      <div className="ButtonDiv">
        <button type="button" className="button" onClick={this.props.handleDelete}>delete poem</button>
      </div>
    )
  }
}

export default DeleteButton
