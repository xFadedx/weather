async function getWeather() {
    const apiKey = "5c31bb1c459d0915c0a2e42065d40bbd";
    const cityInput = document.getElementById("city");
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    if (city === '') {
      document.getElementById("weather").innerHTML = '';
      return;
    }
  
    try {
      const response = await fetch(apiUrl, { mode: "cors" });
      const data = await response.json();
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const location = data.name;
  
      const weather = document.getElementById("weather");
  
      // Construct the URL for the weather icon using the icon code
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  
      weather.innerHTML = `
        <h3>Current Weather in ${location}</h3>
        <img src="${iconUrl}" alt="${description}" style="width: 80px; height: 80px;">
        <p>Temperature: ${temperature} &deg;C</p>
        <p>Description: ${description}</p>
      `;
  
      const container = document.querySelector(".container");
      container.classList.add("expand"); // Add this line to add the class
  
      // Scroll to the weather information
      weather.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  }
  
  document.getElementById("#city").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("getWeatherBtn").click();
      document.getElementById("weather").innerHTML = "ENTER HAS BEEN PRESSED";
    }
  });
  