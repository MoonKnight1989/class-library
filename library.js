<script>
class Catalog {
  constructor() {
    this._books = [];
    this._movies = [];
    this._CDs = [];
  }
  get books() {
    return this._books;
  }
  get movies() {
    return this._movies
  }
  get CDs() {
    return this._cds
  }
}

const mediaList = new Catalog;

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const avg = Math.floor(
      this._ratings.reduce((a, b) => a + b) / this._ratings.length
    );
    return avg;
  }

  addRating(value) {
    if (value <= 5 && value > 0) {
      this._ratings.push(value);
    } else {
      console.log(`Please choose a number between 1 and 5`);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;

    mediaList._books.push(this._title + ' | ' + this._author);
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;

    mediaList._movies.push(this._title + ' | ' + this._director);

  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(artist, title, tracks) {
    super(title);
    this._artist = artist;
    this._tracks = tracks
    this._songTitles = [];

    mediaList._CDs.push(this._title + ' | ' + this._artist);
  }

  get artist() {
    return this._artist;
  }
  get songTitles() {
    return this._songTitles;
  }

  addSongTitle(songTitle) {
    this._songTitles.push(songTitle)
  }

 shuffle() {
      let trackLength = this._songTitles.length;
      let randomNum = Math.floor(Math.random()*trackLength);
      return this._songTitles[randomNum];
  }

}



// CD
const asDaylightDies = new CD('Killswitch Engage', 'As Daylight Dies', 8)
asDaylightDies.addSongTitle('track 1')
asDaylightDies.addSongTitle('track 2')
asDaylightDies.addSongTitle('track 3')
asDaylightDies.addSongTitle('track 4')
//console.log(asDaylightDies.songTitles)
//console.log(asDaylightDies.shuffle())

// BOOK
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everthing", 544);
historyOfEverything.toggleCheckoutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//console.log(`History of Everything is checked out = ${historyOfEverything.isCheckedOut`);
//console.log(`History Of Everything average rating = ${historyOfEverything.getAverageRating()}`);

// MOVIE
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckoutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//console.log(`Speed is checked out? = ${speed.isCheckedOut}`);
//console.log(`Speed average rating = ${speed.getAverageRating()}`);

</script>
