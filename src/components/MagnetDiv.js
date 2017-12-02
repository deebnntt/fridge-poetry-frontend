import React from 'react'

class MagnetDiv extends React.Component {

  render() {

    return (
      <div className='magnet' style={{"position": "absolute", "left": this.props.left, "top": this.props.top,  "background-color": this.props.background}}>
        {this.props.word}
      </div>
    )
  }
}

export default MagnetDiv
