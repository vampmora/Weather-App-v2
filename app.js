const button = document.querySelector('.btn');
const cityInput = document.querySelector('.cityInput');
const name = document.querySelector('.name'); // h1
const temp = document.querySelector('.temp');
const description= document.querySelector('.description');
const windSpeed = document.querySelector('.windSpeed');
const gust = document.querySelector('.windGust');
const feelsLike = document.querySelector('.feelsLike')
const country = document.querySelector('.country');
const humidity = document.querySelector('.humidity');


button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=a3a0795c6044e78543bb5166151ede02&units=metric`)
    .then(res =>{
        console.log('response', res);
        return res.json();
    }).then(data =>{
        let nameValue = data['name'];
        let countryValue = data['sys']['country'];
        let tempValue = data ['main']['temp'];
        let feelsLikeValue = data ['main']['feels_like'];
        let descriptionValue = data['weather'][0]['description'];
        let windSpeedValue = data['wind']['speed'];
        let gustValue = data ['wind']['gust'];
        let humidityValue = data ['main']['humidity'];
        name.innerHTML = nameValue;
        country.innerHTML = `Country: ${countryValue}`;
        temp.innerHTML = `Temprature: ${tempValue}°C`;
        feelsLike.innerHTML = `Feels like: ${feelsLikeValue}°C`;
        description.innerHTML = descriptionValue;
        windSpeed.innerHTML= `Wind Speed:  ${windSpeedValue} KM/H`;
        gust.innerHTML = `Gust ${gustValue} KM/h`;
        humidity.innerHTML = `Humidity: ${humidityValue}%`;
        
    })
    
    .catch(err =>{
        console.log('check your connection', err);
        alert('Check the City name please');
    })

  cityInput.value='';

  
});





//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}