import React from 'react'

class MagnetDiv extends React.Component {

  render() {

    return (
      <div className='magnet' style={{"position": "absolute", "marginLeft": this.props.left, "marginTop": this.props.top}}>
        {this.props.word}
      </div>
    )
  }
}

export default MagnetDiv
