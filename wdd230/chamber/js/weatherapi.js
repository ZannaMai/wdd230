//Weather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?temperature&lat=43.4931&lon=-112.0428&units=metric&appid=082ab106dd8a8209d0637abf917b514d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windspeed = jsObject.wind.speed.toFixed(1);
    const windchill = jsObject.main.feels_like.toFixed(1);

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector('#windspeed').textContent = windspeed;
    document.querySelector("#windchill").textContent = windchill;
  });

const windChill = (celsiusTemp, windS) => {
  return (celsiusTemp <= 10 && windS > 4.8)
  ?
    Math.round(0.6215 * celsiusTemp - 11.37 *
      Math.pow(windS, 0.16) + 0.3965 * celsiusTemp * 
      Math.pow(windS, 0.16) + 13.12)
  :
    "N/A";
}