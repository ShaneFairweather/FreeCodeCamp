$(document).ready(function() {

  getLocation();

  function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      console.log(location);

      $('.location')
        .append(location.city + ", ")
        .append(location.region);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;

    }, "jsonp");

  }

  function getWeather(loc, units) {
    lat = loc.split(",")[0] //.toString();
    lon = loc.split(",")[1] //.toString();

    //var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units;
    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units + '&appid=ced16fd23f7d308017d609dda1a6a8ac';

    console.log(weatherApiUrl);

    $.get(weatherApiUrl, function(weather) {
      var windDir = convertWindDirection(weather.wind.deg);
      var temperature = weather.main.temp;
      var unitLabel;

      //label based in imperial vs metric units
      if (units === "imperial") {
        unitLabel = "F";
      } else {
        unitLabel = "C";
      }

      temperature = parseFloat((temperature).toFixed(1));

      console.log(weather);

      $('#icon')
        .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
      $('#temp').append(Math.round(temperature) + " ");
      $('#conditions').append((weather.weather[0].description)[0].toUpperCase() + (weather.weather[0].description).slice(1));
      $('#wind').append(windDir + " " + Math.round(weather.wind.speed*1.15078) + " MPH");
//      $('#postal').append(postal);
      
//      var wDescription = (weather.weather[0].description);
      var iconCode = (weather.weather[0].icon.toString().slice(0, 2));
     
    switch (iconCode) {
      case '04':
        $("body").css("background", "url(http://miriadna.com/desctopwalls/images/max/Cloudy-hat-over-the-sea.jpg)");
        break;
      case '02':
        $("body").css("background", "url(http://austingwalters.com/wp-content/uploads/2015/02/hill.jpg)");
        break;
      case '01':
        $("body").css("background", "url(http://eskipaper.com/images/amazing-sunny-day-wallpaper-1.jpg)");
        break;
      case '03':
        $("body").css("background", "url(http://wallpoper.com/images/00/44/17/67/few-clouds-sky_00441767.jpg)");
        break;
      case '03':
        $("body").css("background", "url(https://johnrussellblog.files.wordpress.com/2013/01/clouds_em.jpg)");
        break;
      case '09':
        $("body").css("https://wallpaperscraft.com/image/rain_drops_splashes_heavy_rain_dullness_bad_weather_60638_1680x1050.jpg)");
        break;
      case '10':
        $("body").css("background", "url(https://www.caminodesantiago.me/wp-content/uploads/rain1.jpg)");
        break;
      case '11':
        $("body").css("background", "url(http://www.ourdailyreflection.com/wp-content/uploads/2013/05/79_1thunderstorm_and_oak.jpg)");
        break;
      case '13':
        $("body").css("background", "url(http://dreamatico.com/data_images/snow/snow-5.jpg)");
        break;
      case '50':
        $("body").css("background", "url(http://pix4mod.com/wp-content/uploads/2016/01/mist-wallpaper-2016-5.jpg)");
        break;
      default:
      console.log(truth);
    }

    $("#cel").click(function() {
      $("#cel").addClass("current");
      $("#fah").removeClass("current");
      $("#metric").html("&deg;C");
      $('#temp').html(F2C(temperature) + " ");
    });
    $("#fah").click(function() {
      $("#fah").addClass("current");
      $("#cel").removeClass("current");
      $("#metric").html("&deg;F");
      $("#temp").html(Math.round(temperature) + " ");
    });
      
    }, "jsonp");

  
    
  };

  
  function convertWindDirection(dir) {
    var angles = ['N', 'NE', 'NW', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var eightPoint = Math.floor(dir / 45);
    return angles[eightPoint];
  }

  function getUnits(country) {
    var imperialCountries = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCountries.indexOf(country) === -1) {
      var units = 'metric';
    } else {
      units = 'imperial';
    }

    console.log(country, units);
    return units;
  }

  function F2C(f) {
    return Math.round(((f - 32) * 5) / 9);
  }

  

  

});