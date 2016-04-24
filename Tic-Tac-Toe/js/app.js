$(document).ready(function() {
  var userChoice;
  var compChoice;
  var choice;
  var currentChoice;
  var remove;
  var check;
  var win = "You win!";
  var lose = "You lose!";
  var tie = "Its a tie!";
  var gameOver = false;
  var fullBoard = false;
  var s1 = $('#square1'),
    s2 = $('#square2'),
    s3 = $('#square3'),
    s4 = $('#square4'),
    s5 = $('#square5'),
    s6 = $('#square6'),
    s7 = $('#square7'),
    s8 = $('#square8'),
    s9 = $('#square9');
  var openSpaces = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
  var previousMove;

  function updateSpaces() {
    remove = openSpaces.indexOf(previousMove);
    check = openSpaces.splice(remove, 1);
  }

  function firstMove() {
    fullBoard = false;
    setTimeout(function() {
      var choice = Math.floor(Math.random() * 4);
      switch (choice) {
        case 0:
          $(s1).html(compChoice);
          $(s1).addClass("disabledbutton");
          previousMove = s1;
          updateSpaces();
          break;
        case 1:
          $(s3).html(compChoice);
          $(s3).addClass("disabledbutton");
          previousMove = s3;
          updateSpaces();
          break;
        case 2:
          $(s5).html(compChoice);
          $(s5).addClass("disabledbutton");
          previousMove = s5;
          updateSpaces();
          break;
        case 3:
          $(s7).html(compChoice);
          $(s7).addClass("disabledbutton");
          previousMove = s7;
          updateSpaces();
          break;
        case 4:
          $(s9).html(compChoice);
          $(s9).addClass("disabledbutton");
          previousMove = s8;
          updateSpaces();
          break;
      }
    }, 300);
  }

  //Com loses when places choice side by side on its second(third overall) turn.
  function nextMove() {
    innerS1 = $('#square1').html(),
      innerS2 = $('#square2').html(),
      innerS3 = $('#square3').html(),
      innerS4 = $('#square4').html(),
      innerS5 = $('#square5').html(),
      innerS6 = $('#square6').html(),
      innerS7 = $('#square7').html(),
      innerS8 = $('#square8').html(),
      innerS9 = $('#square9').html();
    console.log("Next Move");
    console.log(innerS9);
    var empty = "";
    if (innerS1 == compChoice && innerS2 == compChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS4 == compChoice && innerS5 == compChoice && innerS6 == empty) {
      s6.html(compChoice);
      s6.addClass("disabledbutton");
      previousMove = s6;
      updateSpaces();
      endGame();
    } else if (innerS7 == compChoice && innerS8 == compChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS1 == compChoice && innerS4 == compChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS2 == compChoice && innerS5 == compChoice && innerS8 == empty) {
      s8.html(compChoice);
      s8.addClass("disabledbutton");
      previousMove = s8;
      updateSpaces();
      endGame();
    } else if (innerS3 == compChoice && innerS6 == compChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS1 == compChoice && innerS5 == compChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS3 == compChoice && innerS5 == compChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS7 == compChoice && innerS5 == compChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS9 == compChoice && innerS5 == compChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS3 == compChoice && innerS2 == compChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS6 == compChoice && innerS5 == compChoice && innerS4 == empty) {
      s4.html(compChoice);
      s4.addClass("disabledbutton");
      previousMove = s4;
      updateSpaces();
      endGame();
    } else if (innerS9 == compChoice && innerS8 == compChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS7 == compChoice && innerS4 == compChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS8 == compChoice && innerS5 == compChoice && innerS2 == empty) {
      s2.html(compChoice);
      s2.addClass("disabledbutton");
      previousMove = s2;
      updateSpaces();
      endGame();
    } else if (innerS9 == compChoice && innerS6 == compChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS1 == compChoice && innerS3 == compChoice && innerS2 == empty) {
      s2.html(compChoice);
      s2.addClass("disabledbutton");
      previousMove = s2;
      updateSpaces();
      endGame();
    } else if (innerS4 == compChoice && innerS6 == compChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS7 == compChoice && innerS9 == compChoice && innerS8 == empty) {
      s8.html(compChoice);
      s8.addClass("disabledbutton");
      previousMove = s8;
      updateSpaces();
      endGame();
    } else if (innerS1 == compChoice && innerS7 == compChoice && innerS4 == empty) {
      s4.html(compChoice);
      s4.addClass("disabledbutton");
      previousMove = s4;
      updateSpaces();
      endGame();
    } else if (innerS2 == compChoice && innerS8 == compChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS3 == compChoice && innerS9 == compChoice && innerS6 == empty) {
      s6.html(compChoice);
      s6.addClass("disabledbutton");
      previousMove = s6;
      updateSpaces();
      endGame();
    } else if (innerS1 == compChoice && innerS9 == compChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS7 == compChoice && innerS3 == compChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS2 == userChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS4 == userChoice && innerS5 == userChoice && innerS6 == empty) {
      s6.html(compChoice);
      s6.addClass("disabledbutton");
      previousMove = s6;
      updateSpaces();
      endGame();
    } else if (innerS7 == userChoice && innerS8 == userChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS4 == userChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS2 == userChoice && innerS5 == userChoice && innerS8 == empty) {
      s8.html(compChoice);
      s8.addClass("disabledbutton");
      previousMove = s8;
      updateSpaces();
      endGame();
    } else if (innerS3 == userChoice && innerS6 == userChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS5 == userChoice && innerS9 == empty) {
      s9.html(compChoice);
      s9.addClass("disabledbutton");
      previousMove = s9;
      updateSpaces();
      endGame();
    } else if (innerS3 == userChoice && innerS5 == userChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS7 == userChoice && innerS5 == userChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS9 == userChoice && innerS5 == userChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS3 == userChoice && innerS2 == userChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS6 == userChoice && innerS5 == userChoice && innerS4 == empty) {
      s4.html(compChoice);
      s4.addClass("disabledbutton");
      previousMove = s4;
      updateSpaces();
      endGame();
    } else if (innerS9 == userChoice && innerS8 == userChoice && innerS7 == empty) {
      s7.html(compChoice);
      s7.addClass("disabledbutton");
      previousMove = s7;
      updateSpaces();
      endGame();
    } else if (innerS7 == userChoice && innerS4 == userChoice && innerS1 == empty) {
      s1.html(compChoice);
      s1.addClass("disabledbutton");
      previousMove = s1;
      updateSpaces();
      endGame();
    } else if (innerS8 == userChoice && innerS5 == userChoice && innerS2 == empty) {
      s2.html(compChoice);
      s2.addClass("disabledbutton");
      previousMove = s2;
      updateSpaces();
      endGame();
    } else if (innerS9 == userChoice && innerS6 == userChoice && innerS3 == empty) {
      s3.html(compChoice);
      s3.addClass("disabledbutton");
      previousMove = s3;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS3 == userChoice && innerS2 == empty) {
      s2.html(compChoice);
      s2.addClass("disabledbutton");
      previousMove = s2;
      updateSpaces();
      endGame();
    } else if (innerS4 == userChoice && innerS6 == userChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS7 == userChoice && innerS9 == userChoice && innerS8 == empty) {
      s8.html(compChoice);
      s8.addClass("disabledbutton");
      previousMove = s8;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS7 == userChoice && innerS4 == empty) {
      s4.html(compChoice);
      s4.addClass("disabledbutton");
      previousMove = s4;
      updateSpaces();
      endGame();
    } else if (innerS2 == userChoice && innerS8 == userChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS3 == userChoice && innerS9 == userChoice && innerS6 == empty) {
      s6.html(compChoice);
      s6.addClass("disabledbutton");
      previousMove = s6;
      updateSpaces();
      endGame();
    } else if (innerS1 == userChoice && innerS9 == userChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else if (innerS7 == userChoice && innerS3 == userChoice && innerS5 == empty) {
      s5.html(compChoice);
      s5.addClass("disabledbutton");
      previousMove = s5;
      updateSpaces();
      endGame();
    } else {
      choice = Math.floor(Math.random() * openSpaces.length);
      switch (choice) {
        case 0:
          $(openSpaces[0]).html(compChoice);
          $(openSpaces[0]).addClass("disabledbutton");
          previousMove = openSpaces[0];
          updateSpaces();
          endGame();
          break;
        case 1:
          $(openSpaces[1]).html(compChoice);
          $(openSpaces[1]).addClass("disabledbutton");
          previousMove = openSpaces[1];
          updateSpaces();
          endGame();
          break;
        case 2:
          $(openSpaces[2]).html(compChoice);
          $(openSpaces[2]).addClass("disabledbutton");
          previousMove = openSpaces[2];
          updateSpaces();
          endGame();
          break;
        case 3:
          $(openSpaces[3]).html(compChoice);
          $(openSpaces[3]).addClass("disabledbutton");
          previousMove = openSpaces[3];
          updateSpaces();
          endGame();
          break;
        case 4:
          $(openSpaces[4]).html(compChoice);
          $(openSpaces[4]).addClass("disabledbutton");
          previousMove = openSpaces[4];
          updateSpaces();
          endGame();
          break;
        case 5:
          $(openSpaces[5]).html(compChoice);
          $(openSpaces[5]).addClass("disabledbutton");
          previousMove = openSpaces[5];
          updateSpaces();
          endGame();
          break;
        case 6:
          $(openSpaces[6]).html(compChoice);
          $(openSpaces[6]).addClass("disabledbutton");
          previousMove = openSpaces[6];
          updateSpaces();
          endGame();
          break;
        case 7:
          $(openSpaces[7]).html(compChoice);
          $(openSpaces[7]).addClass("disabledbutton");
          previousMove = openSpaces[7];
          updateSpaces();
          endGame();
          break;
        case 8:
          $(openSpaces[8]).html(compChoice);
          $(openSpaces[8]).addClass("disabledbutton");
          previousMove = openSpaces[8];
          updateSpaces();
          endGame();
          break;
      }
    }
  }

  function clearBoard() {
    clearTimeout(nextMove);
    $('.square').empty();
    $('.square').removeClass("disabledbutton");
    openSpaces = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
  }

  var innerS1,
    innerS2,
    innerS3,
    innerS4,
    innerS5,
    innerS6,
    innerS7,
    innerS8,
    innerS9;

  function endGame() {
    gameOver = false;
    innerS1 = $('#square1').html(),
      innerS2 = $('#square2').html(),
      innerS3 = $('#square3').html(),
      innerS4 = $('#square4').html(),
      innerS5 = $('#square5').html(),
      innerS6 = $('#square6').html(),
      innerS7 = $('#square7').html(),
      innerS8 = $('#square8').html(),
      innerS9 = $('#square9').html();

    if ((innerS1 == userChoice && innerS2 == userChoice && innerS3 == userChoice) || (innerS4 == userChoice && innerS5 == userChoice && innerS6 == userChoice) || (innerS7 == userChoice && innerS8 == userChoice && innerS9 == userChoice) || (innerS1 == userChoice && innerS4 == userChoice && innerS7 == userChoice) || (innerS2 == userChoice && innerS5 == userChoice && innerS8 == userChoice) || (innerS3 == userChoice && innerS6 == userChoice && innerS9 == userChoice) || (innerS1 == userChoice && innerS5 == userChoice && innerS9 == userChoice) || (innerS3 == userChoice && innerS5 == userChoice && innerS7 == userChoice)) {
      gameOver = true;
      alert(win);
      openSpaces = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
      clearBoard();
      firstMove();
    }

    if ((innerS1 == compChoice && innerS2 == compChoice && innerS3 == compChoice) || (innerS4 == compChoice && innerS5 == compChoice && innerS6 == compChoice) || (innerS7 == compChoice && innerS8 == compChoice && innerS9 == compChoice) || (innerS1 == compChoice && innerS4 == compChoice && innerS7 == compChoice) || (innerS2 == compChoice && innerS5 == compChoice && innerS8 == compChoice) || (innerS3 == compChoice && innerS6 == compChoice && innerS9 == compChoice) || (innerS1 == compChoice && innerS5 == compChoice && innerS9 == compChoice) || (innerS3 == compChoice && innerS5 == compChoice && innerS7 == compChoice)) {
      gameOver = true;
      alert(lose);
      openSpaces = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
      clearBoard();
      firstMove();
    } else if (openSpaces.length == 0) {
      gameOver = true;
      fullBoard = true;
      alert(tie);
      setTimeout(function() {
        openSpaces = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
        clearBoard();
        firstMove();
      }, 200);
    } else {}
  }

  function clearBoard() {
    $('.square').empty();
    $('.square').removeClass("disabledbutton");
  }

  $(window).load(function() {
    $('#myModal').modal('show');
  });

  $('#x').click(function() {
    userChoice = 'X';
    compChoice = 'O';
    firstMove();

  });
  $('#o').click(function() {
    userChoice = 'O';
    compChoice = 'X';
    firstMove();
  });

  $('.square').click(function() {
    currentChoice = $(this).data("name");
    switch (currentChoice) {
      case "s1":
        previousMove = s1;
        break;
      case "s2":
        previousMove = s2;
        break;
      case "s3":
        previousMove = s3;
        break;
      case "s4":
        previousMove = s4;
        break;
      case "s5":
        previousMove = s5;
        break;
      case "s6":
        previousMove = s6;
        break;
      case "s7":
        previousMove = s7;
        break;
      case "s8":
        previousMove = s8;
        break;
      case "s9":
        previousMove = s9;
        break;

    }
    $(this).html(userChoice);
    $(this).addClass("disabledbutton");
    updateSpaces();
    endGame();
    if (gameOver == false) {
      nextMove();
    } else {
      gameOver = false;
    }

  })

})
