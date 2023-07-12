const form = document.querySelector('form');
const  card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Weather();

const updateUI = data => {

    const cityInfo = data.cityInfo;//getting the city data returned from updateCity function
    const weatherInfo = data.weatherInfo;//getting the weather data returned from updateCity function

    //update the details template
    details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weatherInfo.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherInfo.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `

    //remove class 'd-none' from card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //adding the weather icons
    const iconSrc = `./img/icons/${weatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //adding day or night image
    if(weatherInfo.IsDayTime === true){
        time.src = './img/day.svg';
    }else{
        time.src = './img/night.svg';
    }
}



form.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const city = form.city.value.trim();
    form.reset();

    //update the UI with the city
    forecast.updateCity(city).then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    });

    //set localstorage
    localStorage.setItem('city', city);
});
//check to see if there is any data in local storage
if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city')).then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    })
}