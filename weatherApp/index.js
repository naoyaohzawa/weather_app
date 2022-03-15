// https://www.youtube.com/watch?v=WZNG8UomjSI
// https://home.openweathermap.org/
// 参考にしたURL


// OpenWeatherのAPIを取得
// 参考OpenWeatherのホームページのタブAPIをクリックする。
// APIをhttpに入力する
// cityとAPIを入力する（{}も削除）
// &units=metric&をcityの後に追加するとセルシウス単位の温度に変更できる



// fetchの使い方

let weather ={
    "appKey" : "",
    fetchWeather: function (city) {  
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid=" 
        + this.appKey
        )
        .then(response => response.json())
        .then((data) => this.displayWeather(data));        
    },
    
    displayWeather: function (data) {  
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(data);
        console.log(name, icon, description, temp, humidity, speed);

     

        $(".city").html(`Weather in ${name}`)
        $(".temp").html(`${temp}°C`);
        $(".icon").attr('src', 'http://openweathermap.org/img/wn/'+ icon +'.png')
        $(".description").html(description);
        $(".humidity").html(`Humidity: ${humidity}%`)
        $(".wind").html(`Wind Speed: ${speed} km/h`)
        $("body").css("background-image","url(https://source.unsplash.com/featured/?"+name+")")
    },
    search: function () {  
        this.fetchWeather($(".search-bar").val());
    }
};

$(".search button").on("click", function () {  
    weather.search();
})

$(".search-bar").on("keyup", function (e) {  
    if(e.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("tokyo");
