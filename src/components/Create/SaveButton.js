import React from 'react'

class SaveButton extends React.Component {

  render() {

    return (
      <div className="ButtonDiv">
        <button type="button" className="button" onClick={this.props.handleSubmit}>save poem</button>
      </div>
    )
  }
}

export default SaveButton
