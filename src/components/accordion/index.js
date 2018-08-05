import React, { Component } from 'react';
import Song from './song';
import { MUSIC_DATA } from '../../constants';

export default class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accordionIndexOpen: null
    }
  }

  handleClick(e, index) {
    const { accordionIndexOpen } = this.state;
    if (accordionIndexOpen !== null || accordionIndexOpen === index) {
      return this.setState({ accordionIndexOpen: null });
    }
    return this.setState({ accordionIndexOpen: index });
  }

  renderArtists(data) {
    return data.artists.map((artist, index) => {
      return (
        <li key={index}>
          <div className="card card-wrapper">
            <h4>{artist.name}</h4>
            <p>Style: {artist.style}</p>
            {artist.songs.map((song, index) => {
              return <Song key={index} song={song} index={index}/>
            })}
          </div>
        </li>
      )
    });
  }

  renderAccordions() {
    return MUSIC_DATA.map((data, index) => {
      const { accordionIndexOpen } = this.state;
      const buttonClass = accordionIndexOpen === index ? '' : 'collapsed';
      const showClass = accordionIndexOpen === index ? 'show' : '';
      const arrowClass = accordionIndexOpen === index ? 'expand_less' : 'expand_more';
      return (
        <div key={index} className="card">
          <div className={`card-header ${buttonClass}`} id={`card-heading-${data.id}`}>
            <button className="accordion-btn btn btn-link" onClick={e => this.handleClick(e, index)} type="button" data-toggle="collapse" data-target={`#card-${data.id}`} aria-expanded="true" aria-controls={`card-${data.id}`}>
              <h5 className="accordion-header mb-0">
                {data.genre}
              </h5>
              <i className="accordion-icon large material-icons float-right">{arrowClass}</i>

            </button>
          </div>
          <div id={`card-${data.id}`} className={`collapse ${showClass}`} aria-labelledby="headingOne" data-parent="#musicAccordion">
            <div className="card-body">
              <ul className="card-body-list">
                {this.renderArtists(data)}
              </ul>
            </div>
          </div>
        </div>
      )
    });
  }
  render() {
    console.log('render state', this.state.accordionIndexOpen);
    return (
      <div id="musicAccordion" className="accordion accordion-container">
        {this.renderAccordions()}
      </div>
    );
  }
}
