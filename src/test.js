city = {
  request: {
    type: "City",
    query: "Amman, Jordan",
    language: "en",
    unit: "m"
  },
  location: {
    name: "Amman",
    country: "Jordan",
    region: "Amman Governorate",
    lat: "31.950",
    lon: "35.933",
    timezone_id: "Asia/Amman",
    localtime: "2019-10-15 23:05",
    localtime_epoch: 1571180700,
    utc_offset: "3.0"
  },
  current: {
    observation_time: "08:05 PM",
    temperature: 23,
    weather_code: 143,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
    ],
    weather_descriptions: ["Haze"],
    wind_speed: 0,
    wind_degree: 0,
    wind_dir: "N",
    pressure: 1019,
    precip: 0.6,
    humidity: 57,
    cloudcover: 0,
    feelslike: 25,
    uv_index: 0,
    visibility: 5,
    is_day: "no"
  }
};
console.log(city.current.temperature);
