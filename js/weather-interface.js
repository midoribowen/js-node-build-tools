var apiKey = "ae8b792f4392d464a71655c1d0aa69d6";

// api.openweathermap.org/data/2.5/weather?q=Chicago&appid=ae8b792f4392d464a71655c1d0aa69d6

$(function() {
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
