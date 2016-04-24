$(document).ready(function() {
  var breakTime = 5;
  var sessionTime = 25;
  var active = false;
  var pause = true;
  var pauseMin;
  var pauseSec;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + sessionTime * 60 * 1000);

  $('.timeBreak').html(breakTime);
  $('.timeSession').html(sessionTime);
  $('#remainingTime').html(sessionTime);

  $('.subtractBreak').click(function() {
    if (pause == true) {
      if (breakTime > 1) {
        breakTime--;
      }
    }
    $('.timeBreak').html(breakTime);
  })

  $('.addBreak').click(function() {
    if (pause == true) {
      breakTime++;
      $('.timeBreak').html(breakTime);
    }
  })
  $('.subtractSession').click(function() {
    if (pause == true) {
      $('#remainingTime').show();
      $('#activeTime').hide();
      if (sessionTime > 1) {
        sessionTime--;
        $('#remainingTime').html(sessionTime);
      }
      $('.timeSession').html(sessionTime);
      active = false;
    }
  })
  $('.addSession').click(function() {
    if (pause == true) {
      $('#remainingTime').show();
      $('#activeTime').hide();
      sessionTime++;
      $('.timeSession').html(sessionTime);
      $('#remainingTime').html(sessionTime);
      active = false;
    }
  })

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60));
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('#minutes');
    var secondsSpan = clock.querySelector('#seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ' :';
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        var wav = 'http://www.oringz.com/oringz-uploads/sounds-742-successful.mp3';
        var audio = new Audio(wav);
        audio.play();
        clearInterval(timeinterval);
        var curClock = $('.currentClock').html();
        if (curClock == 'Session') {
          currentTime = Date.parse(new Date());
          deadline = new Date(currentTime + breakTime * 60 * 1000);
          $('.currentClock').html("Break!")
          initializeClock('activeTime', deadline);
        } else {
          currentTime = Date.parse(new Date());
          deadline = new Date(currentTime + sessionTime * 60 * 1000);
          $('.currentClock').html("Session")
          initializeClock('activeTime', deadline);
        }
      }
    }

    updateClock(); // run function once at first to avoid delay
    window.timeinterval = setInterval(updateClock, 1000);
  }
  
    function startClock() {
      currentTime = Date.parse(new Date());
      deadline = new Date(currentTime + sessionTime * 60 * 1000);
      $('#remainingTime').hide();
      $('#activeTime').show();
      initializeClock('activeTime', deadline);
      pause = false;
      active = true;
      console.log("Pause is " + pause);
      console.log("Alert is " + active);
  }
  
  function pauseClock() {
      pauseMin = getTimeRemaining(deadline).minutes;
      pauseSec = getTimeRemaining(deadline).seconds;
      clearInterval(timeinterval);
      pause = true;
      console.log("Pause is " + pause);
      console.log("Alert is " + active);
  }
  
   function resumeClock() {
      pause = false;
      active = true;
      currentTime = Date.parse(new Date());
      deadline = new Date(currentTime + ((((pauseMin * 60) + pauseSec))/60) * 60 * 1000);
      initializeClock('activeTime', deadline);
      console.log("Pause is " + pause);
      console.log("Alert is " + active);
    }

  $('.timer').click(function() {
    if (pause == true && active == false) {
      startClock();
    }
    else if (pause == true && active == true) {
      resumeClock();
    } else {
      pauseClock();
    }
  })
})