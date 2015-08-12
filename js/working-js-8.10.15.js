// media constructor
var Game = function (title, genre) {
  this.title = title;
  this.genre = genre;
};

  // Game.prototype.render = function () {
  //   //create first then append
  //   this.$gameElement = $('<li class="double-click-remove"></li>').text("Title: " + this.title + ", " + "genre: " + this.genre);
  //   $('#game-div');
  //   // don't need to return it because i'm not needing to use it for anything else
  //   return this.$gameElement;
  // };

var GameLibrary = function (libraryTitle) {
  this.libraryTitle = libraryTitle;
  this.games = [];
};

GameLibrary.prototype.render = function () {
  $('#library-div').prepend("<h2 class='double-click-remove'>" + this.libraryTitle + "</h2>");
  for (var i = 0; i < this.games.length; i++) {
    $('ul').append("<li class='double-click-remove'>" + this.games[i].title + " - " + this.games[i].genre + "</li>");
  }
};

$(document).on('ready', function() {

  //double click remove
  $(this).on('dblclick', '.double-click-remove', function(event) {
      $(this).remove();
  });

  var myLibrary = new GameLibrary("Patricks");
  //hide the library / game inputs until clicked
  $('#library-div').hide();
  $('#game').hide();

  // event listener for game library -
  $('#library').on('submit', function(event) {
    event.preventDefault();
    var newLibrary = new GameLibrary ($('#game-library').val());
    console.log(newLibrary);
    $('input:text').val('');
    $('#game').show();
    $('#library-div').show();
    //  // library write to html
    // $('#library-div').append(newLibrary.render());
  });

  // event listener for games
  $('#game').on('submit', function(event) {
    event.preventDefault();
    var newGame = new Game ($('#title').val(), $('#genre').val());
    myLibrary.games.push(newGame);
    $('input:text').val('');
    myLibrary.render();
  });

});



// var myGame = new Game ('Kill Everyone!', 'shooter');
