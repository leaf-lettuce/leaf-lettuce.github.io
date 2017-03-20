function loadDate() {
    var currentDate = new Date();
    var dateString = currentDate.toString()
                        .split(" ")
                        .splice(0, 4)
                        .join(" ");
    $("#date").text(dateString);
}

function loadWeather() {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/";
    var apiKey = "bf9b968f706700b7e7a8f5296c3db441";

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
}

function error() {
    alert("Sorry, take an umbrella just in case");
}

    navigator.geolocation.getCurrentPosition(success, error);


    weather.text("just wait");
}
    

function loadNews() {
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "c5fd3cf6a3e34f72ad7b5dd99231a252";
    
    $.getJSON(url + apiKey,  function(data) {
        
        var titles = data.articles.map(function(articles) {
            return "<a href='" + articles.url + "'>" + articles.title + "</a>";
        });
        
        news.html(titles.join("<br><br>"));
    });
    
    news.text("Hold on, I'm getting your news!");
}

loadDate();
loadWeather();
loadNews();