import React from 'react'

class SaveButton extends React.Component {
  constructor(props) {
    super(props)
      }

  render() {

    return (
      <div className="ButtonDiv">
        <button type="button" onClick={this.props.handleSubmit}>save poem</button>
      </div>
    )
  }
}

export default SaveButton
