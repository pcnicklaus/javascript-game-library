// Global Variables
var libraryArray = [];

// Game Constructor
var Game = function (title, genre) {
  this.title = title;
  this.genre = genre;
};
  // Game Render
  // Game.prototype.render = function () {
  //   //create first then append
  //   this.$gameElement = $('<li class="double-click-remove"></li>').text("Title: " + this.title + ", " + "genre: " + this.genre);
  //   $('#game-div');
  //   // don't need to return it because i'm not needing to use it for anything else
  //   return this.$gameElement;
  // };

// GameLibrary Contructor
var GameLibrary = function (libraryTitle) {
  this.libraryTitle = libraryTitle;
  this.games = [];
};

// Game Library render
GameLibrary.prototype.render = function () {
  $('#library-div').prepend("<h2 class='double-click-remove'>" + this.libraryTitle + "</h2>");
  // console.log(this + "this");
  for (var i = 0; i < this.games.length; i++) {
    $('#library-div').append("<p='double-click-remove'>" + this.games[i].title + " - " + this.games[i].genre + "</p>");

  }
};

// Document READY
$(document).on('ready', function() {

  //double click remove
  $(this).on('dblclick', '.double-click-remove', function(event) {
    $(this).remove();
  });

  // hide the add game library form
  $("#library").hide();

  // event listener for add game library form button
  $("#add-library").on('click', function() {
    $("#library").fadeIn();
  });

  // hide the library / game inputs until clicked
  $('#library-div').hide();
  $('#library-select').hide();
  $('#game').hide();

  // create new library
  // var myLibrary = new GameLibrary("Patricks");
  var newLibrary = new GameLibrary("GL1");
  var newLibrary2 = new GameLibrary("GL2");
  var newLibrary3 = new GameLibrary("GL3");
  libraryArray.push(newLibrary);
  libraryArray.push(newLibrary2);
  libraryArray.push(newLibrary3);

  $('#existing-library-select a').on('click', function() {
    // console.log($(this).attr("id"));
    // console.log(libraryArray);
    $('#library-div').html('');
    $('#game-library-title').val('');
    $('#library').hide();
    for (var i = 0; i < libraryArray.length; i++) {
      // console.log(libraryArray[i].libraryTitle);
      if ($(this).attr("id") === libraryArray[i].libraryTitle) {
        $('#game-library-title').html(libraryArray[i].libraryTitle);
        $('#game-form-button').html(
          '<button type="submit" id="'+libraryArray[i].libraryTitle+'" class="btn btn-default btn-sm">submit...</button>'
        );
        $('#game').fadeIn();
        $('#library-div').fadeIn();
      }
    }
  });



  // event listener for game library -
  $('#add-library').on('click', function(event) {
    event.preventDefault();
    newLibrary = new GameLibrary ($('#game-library').val());
    //clear out library because of how you are adding all options into the dropdown
    //clear out the input after it is entered
    $('input:text').val('');
    $('#game').hide();
    $('#library-div').hide();
    //fade everything in
    //  // library write to html
    // $('#library-div').append(newLibrary.render());

    // use the drop down function to populate the drop down
    // clear out the values
  });

  // event listener for game library -
  $('#library').on('submit', function(event) {
    event.preventDefault();
    // hide the library
    $('library').hide();
    // grab input value & and new instance of game Library
    var newLibrary5 = new GameLibrary ($('#game-library').val());
    // add the instance to the game library
    libraryArray.push(newLibrary5);
    // show game form making it dynamic
    $('#game').show();

    console.log('test');
  });

  // populate the dropdown menu with the items;
  function newDropDownItem (libraryArray) {
    var option = '';
    for (var i = 0; i < libraryArray.length; i++) {
       option += '<option value="'+ libraryArray[i].libraryTitle + '">' + libraryArray[i].libraryTitle + '</option>';
    }
    $("#library-select").append(option);
  }

  // event listener for games
  $('#game').on('submit', function(event) {
    event.preventDefault();
    // ahve to target the button id.
    var newGame = new Game ($('#title').val(), $('#genre').val());
    for (var i = 0; i < libraryArray.length; i++) {
      if ($('#game button').attr('id') === libraryArray[i].libraryTitle) {
        $('#game-library-title').html(libraryArray[i].libraryTitle);
              libraryArray[i].games.push(newGame);
              console.log(libraryArray);
              libraryArray[i].render();
      }
    }
    // console.log(newLibrary);
    // (libraryArray[libraryCounter].games.push(newGame));
    $('input:text').val('');

  });



});



// var myGame = new Game ('Kill Everyone!', 'shooter');
