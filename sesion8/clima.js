// Obtener el clima y agregar una tarjeta
function findWeather(city) {
    // Lista de ciudades
    const cities = document.querySelector(".ajax-section .cities")

    const API_KEY = "d95c58501f2b55424cb26ca37c06e37a"

    // API de clima
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            const { main, name, sys, weather } = data
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`

            // Crear para ciudad
            const li = document.createElement("li")
            li.classList.add("city")

            // Código HTML para la vista con la información del clima
            const markup = `
            <h2 class="city-name" data-name="${name}, ${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>

            <div class="city-temp">${Math.round(main.temp)}<sup>ºC</sup></div>

            <figure>
                <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}" />
                <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
        `;

            li.innerHTML = markup
            // Agregar el li a la lista
            cities.appendChild(li)

            // Borrar el input y resetear el formulario
            showMessage('')
            document.querySelector('form').reset()
            // li.scrollIntoView() // Enfocar el último elemento creado
            cityName.focus() // Enfocar el input
        })
        .catch((error) => showMessage("Escribe una ciudad válida.", error))
}

// Lo llama el botón
function addCityWeather() {
    const cityName = document.querySelector("#cityname")
    findWeather(cityName.value)
}

function showMessage(message) {
    const msgContainer = document.querySelector("#msg")
    msgContainer.textContent = message
}

// Obtiene la ubicación mediante una API
function getGeolocationByIp() {
    fetch("https://api.ipbase.com/v1/json/")
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'API rate limit exceeded') {
                const mockData = {
                    "ip": "2806:2f0:8000:c916:132:51a2:84e6:86e0",
                    "country_code": "MX",
                    "country_name": "Mexico",
                    "region_code": "MX-DIF",
                    "region_name": "Ciudad de México",
                    "city": "",
                    "zip_code": "14000",
                    "time_zone": "America\/Mexico_City",
                    "latitude": 19.288429260253906,
                    "longitude": -99.16667175292969,
                    "metro_code": 0
                }
                return mockData
            }
            return data
        })
        .then((data) => {
            const ciudad = data.region_name
            // Mostrar la ubicación predeterminada
            findWeather(ciudad)
            return data
        })
        .then((data) => {
            getLocationFromIP(data.ip)
            getTime(data.time_zone)
            .then(time=>{
                document.querySelector('#time').textContent = time
            })
        })
        .catch()
}

// Obtener la ubicación aproximada mediante la API
getGeolocationByIp()
