const apiKey:"Your API_Key(apiKey)";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

   const searchBox= document.querySelector(".search input");
   const searchBtn= document.querySelector(".search button");
   const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}` );

    if(responce.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await responce.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main=="Clear" || data.weather[0].main=="Clouds" || data.weather[0].main=="Mist"|| data.weather[0].main=="Rain" || data.weather[0].main=="Snow" ){
            weatherIcon.src=`images/${data.weather[0].main}.png`
        }else{
            weatherIcon.src=`images/Clouds.png`
        }

        document.querySelector(".weather").style.display="block";   
        document.querySelector(".error").style.display="none";   
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
});
