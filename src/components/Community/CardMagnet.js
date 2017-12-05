import React from 'react'

class CardMagnet extends React.Component {

  render() {

    return (
      <div className="card-magnet" style={{"position": "block", "backgroundColor": this.props.color}}>
        {this.props.word}
      </div>
    )
  }
}

export default CardMagnet
