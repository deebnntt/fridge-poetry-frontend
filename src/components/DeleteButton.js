import React from 'react'

class DeleteButton extends React.Component {

  render() {

    return (
      <div className="DeleteDiv">
        <button type="button" className="delete-button" onClick={this.props.handleDelete}>delete poem?</button>
      </div>
    )
  }
}

export default DeleteButton
