//page elements
const getBtn = document.getElementById("getweather")
const cityBtn = document.getElementById("cityBtn")

// class weather
class weather {
  constructor() {
    this.findLocationAndDisplayWeather()
  }
  // weather informations
  async displayweather() {
    const api = `http://api.weatherstack.com/current?access_key=29f3bdfb6feea8cc6e3565ef190817ba&query=${this.city}`
    try {
      const response = await fetch(api)
      try {
        const json = await response.json()
        this.temperature = json.current.temperature
        this.humidity = json.current.humidity
        this.wind = json.current.wind_speed
        document.getElementById("temp").innerHTML = `${this.temperature}&deg; C`
        document.getElementById(
          "city"
        ).innerHTML = `${this.city},${this.country}`
        document.getElementById("humidity").innerHTML = `${this.humidity}`
        document.getElementById("wind").innerHTML = `${this.wind} Knots`
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  async findLocationAndDisplayWeather() {
    const api = "https://ipapi.co/json/"
    //console.log(api)
    try {
      const response = await fetch(api)
      try {
        const json = await response.json()
        this.city = json.city
        this.country = json.country_name
        this.latitude = json.latitude
        this.longitude = json.longitude
        this.displayweather()
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
getBtn.addEventListener("click", function() {
  return new weather()
})

// user search for different city
document.getElementById("city-inpt").addEventListener("keyup", function() {
  if (event.keyCode == 13) {
    if (document.getElementById("city-inpt").value != "") {
      class weather {
        constructor() {
          this.displayweather()
        }
        async displayweather() {
          let userCity = document.getElementById("city-inpt").value
          const api = `http://api.weatherstack.com/current?access_key=29f3bdfb6feea8cc6e3565ef190817ba&query=${userCity}`
          try {
            const response = await fetch(api)
            try {
              const json = await response.json()
              this.temperature = json.current.temperature
              this.city = json.location.name
              this.country = json.location.country
              this.humidity = json.current.humidity
              this.wind = json.current.wind_speed
              document.getElementById(
                "temp"
              ).innerHTML = `${this.temperature}&deg; C`
              document.getElementById(
                "city"
              ).innerHTML = `${this.city},${this.country}`
              document.getElementById("humidity").innerHTML = `${this.humidity}`
              document.getElementById("wind").innerHTML = `${this.wind} Knots`
            } catch (error) {
              console.log(error)
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
      return new weather()
    }
  }
})

// find match to what user typed
/*const api =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
const cities = []
fetch(api)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
function findMatch(wordToWatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToWatch, "gi")
    return Object.values({ place: `` }).filter(state => state.match(regex))
  })
}
function displaySuggestions() {
  const matchArry = findMatch(this.value, cities)
  const html = matchArry
    .map(place => {
      const regex = new RegExp(this.value, "gi")
      const stateName = Object.values({
        place: `${}`
      }).filter(state =>
        state.replace(regex, `<span class="hl">${this.value}</span>`)
      )
      return `
    <li>
    <span class='name'>${stateName}</span> 
    </li>`
    })
    .join("")
  suggestions.innerHTML = html
}
const suggestions = document.getElementById("suggestions")
const searchBar = document.getElementById("city-inpt")
searchBar.addEventListener("change", displaySuggestions)
searchBar.addEventListener("keyup", displaySuggestions)
*/
