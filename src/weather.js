//page elements
const getBtn = document.getElementById("getweather");
const cityBtn = document.getElementById("cityBtn");

// class weather
class weather {
  constructor() {
    this.findLocationAndDisplayWeather();
  }
  // weather informations
  async displayweather() {
    const api = `https://api.apixu.com/v1/current.json?key=556fdaf03e764822a40162349191707&q=${
      this.city
    }`;
    try {
      const response = await fetch(api);
      try {
        const json = await response.json();
        console.log(json);
        this.temp_c = json.current.temp_c;
        this.humidity = json.current.humidity;
        this.wind = json.current.gust_kph;
        document.getElementById("temp").innerHTML = `${this.temp_c}&deg; C`;
        document.getElementById("city").innerHTML = `${this.city},${
          this.country
        }`;
        document.getElementById("humidity").innerHTML = `${this.humidity}`;
        document.getElementById("wind").innerHTML = `${this.wind} Kph`;
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async findLocationAndDisplayWeather() {
    const api = "https://ipapi.co/json/";
    //console.log(api)
    try {
      const response = await fetch(api);
      try {
        const json = await response.json();
        console.log(json);
        this.city = json.city;
        this.country = json.country_name;
        this.latitude = json.latitude;
        this.longitude = json.longitude;
        this.displayweather();
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
getBtn.addEventListener("click", function() {
  return new weather();
});

// user search for different city
document.getElementById("city-inpt").addEventListener("keyup", function() {
  if (event.keyCode == 13) {
    if (document.getElementById("city-inpt").value != "") {
      class weather {
        constructor() {
          this.displayweather();
        }
        async displayweather() {
          let userCity = document.getElementById("city-inpt").value;
          const api = `https://api.apixu.com/v1/current.json?key=556fdaf03e764822a40162349191707&q=${userCity}`;
          try {
            const response = await fetch(api);
            try {
              const json = await response.json();
              console.log(json);
              this.temp_c = json.current.temp_c;
              this.city = json.location.name;
              this.country = json.location.country;
              this.humidity = json.current.humidity;
              this.wind = json.current.gust_kph;
              document.getElementById("temp").innerHTML = `${
                this.temp_c
              }&deg; C`;
              document.getElementById("city").innerHTML = `${this.city},${
                this.country
              }`;
              document.getElementById("humidity").innerHTML = `${
                this.humidity
              }`;
              document.getElementById("wind").innerHTML = `${this.wind} Kph`;
            } catch (error) {
              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      return new weather();
    }
  }
});
