export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="col-12">
    <h4>${this.title}: ${this.artist}</h4>
          <img src="${this.albumArt}" alt="${this.album} cover" />
          <audio controls src="${this.preview}"></audio>
          <h4>Album: ${this.album} | Price: ${this.price}</h4>
          <button type="button" class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">add</button>
          </div>
        `;
  }

  get playlistTemplate() {
    return `
    <div class="col-12">
    <h4>${this.title}: ${this.artist}</h4>
          <img src="${this.albumArt}" alt="${this.album} cover" />
          <audio controls src="${this.preview}"></audio>
          <h4>Album: ${this.album} | Price: ${this.price}</h4>
          <button type="button" class="btn btn-danger" onclick="app.songsController.removeSong('${this._id}')">delete</button>
          </div>
        `;
  }
}
