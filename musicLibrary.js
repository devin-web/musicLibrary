class Library {
  constructor( name, creator ){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist( playlist ){
    this.playlists.push( playlist );
  }

  output(){
    console.log( this.name + " Library by " + this.creator );

    for( var i=0; i<this.playlists.length; i++ ){
      this.playlists[i].output();
    }
  }
}

class Playlist {
  constructor( name ){
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
  }

  updateDurationAndRating(){
    var durationAccum = 0;
    var ratingAccum = 0;
    for( var i=0; i<this.tracks.length; i++){
      durationAccum += this.tracks[i].length;
      ratingAccum += this.tracks[i].rating;
    }
    this.overallRating = ratingAccum/this.tracks.length;
    this.totalDuration = durationAccum;
  }

  addTrack( track ){
    this.tracks.push( track );
    this.updateDurationAndRating();
  }

  output(){
    console.log( this.name + " Playlist with overall rating " + this.overallRating + " and total duration " + this.totalDuration );

    for( var i=0; i<this.tracks.length; i++ ){
      this.tracks[i].output();
    }
  }
}

class Track {
  constructor( title, rating, length ){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

  output(){
    console.log( "Title:", this.title, "Rating:", this.rating, "Duration:", this.length );
  }
}

var myLibrary = new Library( "Lyricless", "Devin" );
var myChipTunesPlayList = new Playlist( "ChipTunes" );

myLibrary.addPlaylist( myChipTunesPlayList );

var chiptunesTracks1 = new Track( "Chiptunes Compilation 1", 4, 240.5 );
var chiptunesTracks2 = new Track( "Chiptunes Compilation 2", 5, 240.5 );
var chiptunesTracks3 = new Track( "Chiptunes Compilation 3", 3, 120.5 );

myChipTunesPlayList.addTrack( chiptunesTracks1 );
myChipTunesPlayList.addTrack( chiptunesTracks2 );
myChipTunesPlayList.addTrack( chiptunesTracks3 );

myLibrary.output();
