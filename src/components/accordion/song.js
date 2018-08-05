import React, { Component } from 'react';

export default class Song extends Component {

  renderEditedPreview(song) {
    if (song.preview.edited) {
      return (
        <p>Preview: <a href={song.preview.edited.href}>MP3</a></p>
      );
    }
    return null;
  }

  renderFullPreview(song) {
    if (song.preview.full) {
      return (
        <p>Preview: <a href={song.preview.full.href}>MP3</a></p>
      );
    }
    return null;
  }

  renderEditedDownload(song) {
    if (song.download.edited) {
      return (
        <p>{`${song.download.edited.tracks} tracks: `}
          <a href={song.download.edited.href}>{song.download.edited.fileSize} ZIP</a>
        </p>
      );
    }
    return null;
  }

  renderFullDownload(song) {
    if (song.download.full) {
      return (
        <p>{`${song.download.full.tracks} tracks: `}
          <a href={song.download.full.href}>{song.download.full.fileSize} ZIP</a>
        </p>
      );
    }
    return null;
  }

  renderEdited(song) {
    const edited = song.preview.edited && song.download.edited ? true : false;

    if (edited) {
      return (
        <div className="song-edited-wrapper">
          <h6>Edited Excerpt</h6>
          {this.renderEditedPreview(song)}
          {this.renderEditedDownload(song)}
        </div>
      );
    }

    return null;
  }

  renderFull(song) {
    const full = song.preview.full && song.download.full ? true : false;

    if (full) {
      return (
        <div className="song-full-wrapper">
          <h6>Full Multitrack</h6>
          {this.renderFullPreview(song)}
          {this.renderFullDownload(song)}
        </div>
      );
    }

    return null;
  }

  renderSongInfo(song, index) {
    return (
      <div key={index} className={`song-info-${index}`}>
        <h5>{song.title}</h5>
        {this.renderEdited(song)}
        {this.renderFull(song)}
      </div>
    )
  }

  render() {
    const { song, index } = this.props;

    return (
      <div key={index} className={`song-info-${index}`}>
        <h5>{song.title}</h5>
        {this.renderEdited(song)}
        {this.renderFull(song)}
      </div>
    )
  }
}
