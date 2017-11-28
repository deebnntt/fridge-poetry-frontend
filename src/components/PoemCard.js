import React from 'react'
import CardMagnet from './CardMagnet.js'
import { Link } from 'react-router-dom';

class PoemCard extends React.Component {

  mappedMagnets = () => this.props.magnets.map((m, index) => {
    return <CardMagnet className="magnet" key={index} word={m.text} left={m.x} top={m.y}/>
  })

  render() {

    const url = `poems/${this.props.poemId}`

    return (
      <div className="poem-card">
        {this.mappedMagnets()}
        <Link className="detail-link" to={url}>see details</Link>
      </div>
    )
  }
}

export default PoemCard
