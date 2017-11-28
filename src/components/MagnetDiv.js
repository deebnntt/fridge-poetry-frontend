import React from 'react'

class MagnetDiv extends React.Component {

  render() {

    return (
      <div className='magnet'>
        {this.props.magnet.text}
      </div>
    )
  }
}

export default MagnetDiv
