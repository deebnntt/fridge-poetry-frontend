import React from 'react'
import Draggable from 'react-draggable'
import twittericon from '../twitter.svg'
import dragIcon from './../drag-icon.png'


class ShareCard extends React.Component {

  componentDidMount() {

	}

  displayPoem = () => this.props.text.split('\n').map(function(item, index) {
    return  (
      <span key={index}>
        {item}
        <br/>
      </span>
    )
  })

  handleCopy = () => {
    const copyText = document.getElementById("input")
    copyText.select();
    document.execCommand("Copy");
    alert("Copied the text: " + copyText.value);
  }

  render() {

    const encoded = encodeURI(this.props.text)
    const url = `https://twitter.com/intent/tweet?text=${encoded}&hashtags=madewithmagNET`

    return (
      <Draggable handle=".handle">
        <div>
          <div style={{"position": "absolute", "top":-20, "left": 450}}>
            <div className="handle">share<img src={dragIcon} className="drag-icon"/></div>
              <div className="share-card">
              <p className="twitter-share-button"><a href={url} target="_blank"><img src={twittericon} alt=""/></a></p>
              <div>{this.props.text ? this.displayPoem() : null}</div><br />
              <div><textarea className="share-box" id="input" value={this.props.text ? this.props.text : ""}></textarea></div>
              <button className="button-small" onClick={this.handleCopy}>copy poem</button>
              <br />
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default ShareCard
