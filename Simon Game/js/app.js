$(document).ready(function() {
  var green = $('.green');
  var red = $('.red');
  var yellow = $('.yellow');
  var blue = $('.blue');
  var userList = [];
  var comList = [];
  var selection;
  var count = 0;
  var score = 0;
  var strict = false;
  $('.square').addClass('disabled');
  
  function newGame() {
  comList = [];
  score = 0
  $('.score').html(score);
  newRound();
  }
  
  function newRound() {
    score++;
    $('.score').html(score);
    userList = [];
    count = 0;
    $('.square').addClass('disabled');
    choose();
    repeat(comList);
    $('.square').removeClass('disabled');
  }
  
  function repeat(comList) {
    if(score == 20) {
        alert('You win!!!')
      } else {
    var i = 0;
    var interval = setInterval(function() {
      activate(comList[i]);
      i++;
      if(i >= comList.length) {
        clearInterval(interval);
      }
    }, 600)
    comTurn = false;
    userTurn = true;
      }
  }
  
  function activate(square) {
    playSound(square);
    $("#" + square).addClass('activated');
    setTimeout(function() {
      $("#" + square).removeClass('activated');
    }, 300)
  }
  
  function userSelect() {
    $('.square').removeClass('disabled');
  }
  
  $('.square').click(function() {
    var choice = $(this).attr('id');
    activate(choice);
    userList.push(choice);
    console.log(userList);
    console.log(count);
    if(userList[count] !== comList[count]) {
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-715-nasty-error-long.mp3';
      var audio = new Audio(wav);
      audio.play();
      if(strict == true) {
      alert("Game Over");
      $('.square').addClass('disabled');
      } else {
        setTimeout(function() {
          userList = [];
          count = 0;
          repeat(comList);
        }, 400)
      }
    } else {
      count++;
    }
      if (count >= comList.length) {
      setTimeout(function() {
        newRound();
      }, 400)   
      }
  })

  function choose() {
    selection = Math.floor(Math.random() * 4);
    switch (selection) {
      case 0:
        //activate('green');
        comList.push('green');
        break;
      case 1:
        //activate('red');
        comList.push('red');
        break;
      case 2:
        //activate('yellow');
        comList.push('yellow');
        break;
      case 3:
        //activate('blue');
        comList.push('blue');
        break;
    }
    console.log(comList);
  }

  function playSound(color) {
    switch (color) {
      case 'green':
        var wav = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
        var audio = new Audio(wav);
        audio.play();
        break;
      case 'red':
        var wav = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
        var audio = new Audio(wav);
        audio.play();
        break;
      case 'yellow':
        var wav = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
        var audio = new Audio(wav);
        audio.play();
        break;
      case 'blue':
        var wav = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
        var audio = new Audio(wav);
        audio.play();
        break;
    }
  }
  
  $('#start').click(function() {
    $('.square').addClass('disabled');
    newGame();
  })
  
  $('#reset').click(function() {
    newGame();
  })
  
  $('#strict').click(function() {
    if(strict == true) {
       $('#strict').removeClass('activeStrict');
      strict = false;
    } else {
      $('#strict').addClass('activeStrict');
      strict = true;
    }
  })
})