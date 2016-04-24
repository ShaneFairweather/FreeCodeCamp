$(document).ready(function() {

  twitch();

  // twitch("https://api.twitch.tv/kraken/streams/freecodecamp", function(json) {

  // });

  function twitch() {
    var twitchUrl = "https://api.twitch.tv/kraken/streams/";
    var accountUrl = "https://api.twitch.tv/kraken/users/";
    var streamers = ["ESL_SC2", "freecodecamp", "OgamingSC2", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404"];
    var title;
    var desc;
    var name;
    var img;
    var link;
    $.each(streamers, function(index, value) {
      $.ajax({
        url: "https://api.twitch.tv/kraken/streams/" + value,
        dataType: "jsonp",
        success: function(json) {
          $.ajax({
            url: "https://api.twitch.tv/kraken/users/" + value,
            dataType: "jsonp",
            success: function(data) {
              console.log(data);
 
        //      title = json.stream.game;
        //      desc = json.stream.channel.status;
              link = "https://www.twitch.tv/" + value;
              name = data.display_name;
              img = data.logo;
              
              if (data.logo == null) {
                img = 'http://f.tqn.com/y/grammar/1/S/F/t/-/-/question_mark-166836001.jpg';
              }
              if (json.stream) {
              $(".main").append("<div class='online account'><img src = '" + img + "' /><a href='" + link + "'><h3>" + name + "</h3></a><p>" + json.stream.game + ": " + (json.stream.channel.status).slice(0, 40) + "..." + "</p></div>");
              } else if (json.error) {
                $(".main").append("<div class='offline account'><img src = '" + img + "' /><a href='" + link + "'><h3>" + name + "</h3></a><p>Account Closed</p></div>");
              } else {
                $(".main").append("<div class='offline account'><img src = '" + img + "' /><a href='" + link + "'><h3>" + name + "</h3></a><p>Offline</p></div>");
              };             
            },
            error: function() {
              console.log("Error");
            }
          })

          $("#online").click(function() {
            $(this).addClass("selected");
            $("#offline").removeClass("selected");
            $("#all").removeClass("selected");
            $(".online").show();
            $(".offline").hide();
          })

          $("#offline").click(function() {
            $(this).addClass("selected");
            $("#online").removeClass("selected");
            $("#all").removeClass("selected");
            $(".offline").show();
            $(".online").hide();
          })

          $("#all").click(function() {
            $(this).addClass("selected");
            $("#online").removeClass("selected");
            $("#offline").removeClass("selected");
            $(".account").show();
          })
        },
        error: function() {
          console.log("Error");
        }
      })
    })
  }
  //json.stream.channel.display_name

})

//https://api.twitch.tv/kraken/streams/freecodecamp?callback=?