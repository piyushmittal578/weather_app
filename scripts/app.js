const input = document.querySelector("form.change-location");
const card = document.querySelector("div.card");
const details = document.querySelector("div.details");
const icon = document.querySelector("div.icon img");
const time = document.querySelector("img.time");

const updateUI = (weather) => {

    //destruct
    const { cityDet, cityWeather } = weather;

    //updating icons
    if (cityWeather.IsDayTime)
        time.setAttribute('src', 'images/day.svg');
    else
        time.setAttribute('src', 'images/night.svg');

    icon.setAttribute('src', `icons/${cityWeather.WeatherIcon}.svg`);


    //updating details
    details.innerHTML = `<h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;

    //removing d-none
    if (card.classList.contains("d-none"))
        card.classList.remove("d-none");
}

const updateCity = async (city) => {

    const cityDet = await getCity(city);
    const cityWeather = await getWeather(cityDet.Key);
    return { cityDet, cityWeather };
}

//local storage
if (localStorage.city != undefined) {
    updateCity(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}

input.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.city.value.trim();
    localStorage.city = city;
    input.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
});
