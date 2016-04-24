$(document).ready(function() {


  $(".buttons").click(function() {
    var message = $(this).html();
    var ans = $("#newResult").html();
    if(message === $("#equals").html()) {
      $("#newResult").html(eval($("#result").html()));
      $("#result").hide();
      $("#newResult").show();
      $("#result").empty();
      ans = $("#newResult").html();

    }
    
    else if(message === $("#AC").html()) {
         $("#result").empty();
         $("#result").show();
         $("#newResult").hide();
      }
    
    else if(message === $("#CE").html()) {
         $("#result").html($("#result").html().slice(0,-1));
         //alert($("#result").slice(slice(0,-1)));
      }
    
    else if(message === $("#ANS").html()) {
         $("#result").append(ans);
         //alert($("#result").slice(slice(0,-1)));
      }

    else {
      $("#result").show();
      $("#newResult").hide();
      $("#result").append(message);
    }
    

  });

});

