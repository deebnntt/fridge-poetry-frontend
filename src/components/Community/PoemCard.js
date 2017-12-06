import React from 'react'
import CardMagnet from './CardMagnet.js'
import poemParser from '../../services/poemParser.js'
import likeIcon from '../../heart.svg'

class PoemCard extends React.Component {

  state = {
    likes: null
  }

  componentDidMount() {
    this.setState({
      likes: this.props.likes
    })
  }

  handleClick = () => {
    console.log(this.state)
    this.setState({
      likes: this.state.likes += 1
    })
    this.props.handleLike(this.props.poemId)
  }

  title = () => {
    if (this.props.poemTitle == null) {
      return "Untitled"
    } else {
      return this.props.poemTitle
    }
  }

  parsedPoems = () => {
    const magnetArray = this.props.magnets
    const bucketed = poemParser.digest(magnetArray)
    const stringifiedPoem = poemParser.sortRows(bucketed)
    return stringifiedPoem
  }

  displayPoem = () => this.parsedPoems().split('\n').map(function(line, index) {
    return  (
      <span key={index}>
        {line}
        <br/>
      </span>
    )
  })

  displayMagnets = () => {
    const string = this.parsedPoems()
    const replaced = string.replace(/[\n]/g, " / ")
    return replaced
  }


  mappedMagnets = () => {
    let lines = this.displayMagnets().split(" / ")
    let lineArray = lines.map(line => line.split(" "))
    return lineArray.map((line) => (
      <div className="Line">
        {line.map(word => <CardMagnet className="magnet" word={word} color={this.props.color}/>)}
      </div>
    ))
  }


  render() {

    return (
      <div className="poem-card">
        <h3 className="community-h3">{this.title()}</h3>
        <span>by </span><span className="username" onClick={this.props.handleClick} value={this.props.user}>{this.props.user}</span>
        <div className="poem-display">{this.mappedMagnets()}</div><br/>
        <div className="like-display">
          {this.state.likes}
          <img src={likeIcon} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default PoemCard
