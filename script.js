const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d065bcb43msha3e7e154d58383ep139fa3jsn40507470a955',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


function getWeather(city) {
    cityName.innerHTML = city;

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity

            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed

            wind_degrees.innerHTML = response.wind_degrees
            // sunrise.innerHTML =new Date(response.sunrise)
            // sunset.innerHTML = new Date(response.sunset)

            // console.log(response)
        })
        .catch(err => console.error(err));


};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Kolkata");

//practice:-->
function dubai() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
        .then(response => response.json())
        .then(response => {
            feels_likeDubai.innerHTML = response.feels_like
            humidityDubai.innerHTML = response.humidity
            max_tempDubai.innerHTML = response.max_temp
            min_tempDubai.innerHTML = response.min_temp
            tempDubai.innerHTML = response.temp
            wind_speedDubai.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} dubai()

function boston() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
        .then(response => response.json())
        .then(response => {
            feels_likeBoston.innerHTML = response.feels_like
            humidityBoston.innerHTML = response.humidity
            max_tempBoston.innerHTML = response.max_temp
            min_tempBoston.innerHTML = response.min_temp
            tempBoston.innerHTML = response.temp
            wind_speedBoston.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} boston()

function katmandu() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Katmandu', options)
        .then(response => response.json())
        .then(response => {
            feels_likeKatmandu.innerHTML = response.feels_like
            humidityKatmandu.innerHTML = response.humidity
            max_tempKatmandu.innerHTML = response.max_temp
            min_tempKatmandu.innerHTML = response.min_temp
            tempKatmandu.innerHTML = response.temp
            wind_speedKatmandu.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} katmandu()

function hydrabad() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
        .then(response => response.json())
        .then(response => {
            feels_likeHyderabad.innerHTML = response.feels_like
            humidityHyderabad.innerHTML = response.humidity
            max_tempHyderabad.innerHTML = response.max_temp
            min_tempHyderabad.innerHTML = response.min_temp
            tempHyderabad.innerHTML = response.temp
            wind_speedHyderabad.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} hydrabad()

function dhaka() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
        .then(response => response.json())
        .then(response => {
            feels_likeDhaka.innerHTML = response.feels_like
            humidityDhaka.innerHTML = response.humidity
            max_tempDhaka.innerHTML = response.max_temp
            min_tempDhaka.innerHTML = response.min_temp
            tempDhaka.innerHTML = response.temp
            wind_speedDhaka.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} dhaka()


function darjeeling() {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Darjeeling', options)
        .then(response => response.json())
        .then(response => {
            feels_likeDarjeeling.innerHTML = response.feels_like
            humidityDarjeeling.innerHTML = response.humidity
            max_tempDarjeeling.innerHTML = response.max_temp
            min_tempDarjeeling.innerHTML = response.min_temp
            tempDarjeeling.innerHTML = response.temp
            wind_speedDarjeeling.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
} darjeeling()












