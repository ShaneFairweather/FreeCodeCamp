$(document).ready(function() {

  function displayResults(json) {
    console.log(json.query.search[2]);
    $("#results").removeClass("hidden");
    $("#results").html("");
    for (var i = 0; i < 10; i++) {
      console.log(json.query.search[i].title);
      $("#results").append("<a href='https://en.wikipedia.org/wiki/" + json.query.search[i].title + "'><div><h2>" + json.query.search[i].title + "</h2>" + "<p>" + json.query.search[i].snippet + "</p></div></a>");
    }

  }

  function search() {

    var searchTerm = $("#search").val();
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?",
      dataType: "json",
      headers: {
        'Api-User-Agent': 'Example/1.0'
      },
      success: function(json) {
        console.log(json);
        displayResults(json)
      },
      error: function() {
        alert("False")
      }
    })
  };

  $("button").click(function() {
    search();
  })

  $(document).keypress(function() {
    if (event.which == 13) {
      search();
    }
  })

});