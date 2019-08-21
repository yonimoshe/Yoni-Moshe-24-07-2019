import axios from 'axios';

export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const GET_CURRENT = 'GET_CURRENT';
export const  GET_FORECAST = ' GET_FORECAST';

var token = "LjEUfGR3AcoDRt53CmW0qfOsxNiDSUCH";

export const getSuggestions = (char) => {
  return dispatch => {
    return axios.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=" + char + "&apikey=" + token)
      .then(response => {
        dispatch(formatToCityAndKeyArray(response.data))
      });
  }
};

export const formatToCityAndKeyArray = (arr) => {
  let i = 0;
  const autoSuggestionArray = [];
  arr.forEach((element) => {
    let cities = {
      name: " ",
      key: " "
    };
    cities.name = element.LocalizedName;
    cities.key = element.Key;
    autoSuggestionArray[i] = cities;
    i++;
  });
  return {
    type: GET_SUGGESTIONS,
    autoSuggestion: autoSuggestionArray
  };
};

export const getCurretWeather = (cityName, key) => {
  return dispatch => {
    return axios.get("https://dataservice.accuweather.com/currentconditions/v1/" + key + "?apikey=" + token)
      .then(response => {
        dispatch(loadCurrentWeather(response.data[0].WeatherIcon,
          response.data[0].Temperature.Metric.Value,
          response.data[0].WeatherText,
          cityName,
          key))
      });
  }
};

export const loadCurrentWeather = (currentIcon, currentTemperature, currentWeatherText, currentCity, currentKey) => {
  if (currentIcon < 10) {
    var iconUrl = "https://developer.accuweather.com/sites/default/files/0" + currentIcon + "-s.png";
  } else {
    var iconUrl = "https://developer.accuweather.com/sites/default/files/" + currentIcon + "-s.png";
  }
  return {
    type: GET_CURRENT,
    weatherIcon: iconUrl,
    temperature: currentTemperature,
    weatherText: currentWeatherText,
    city: currentCity,
    key: currentKey
  };
};

export const getForecast = (key) => {
  return dispatch => {
    return axios.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + key + "?apikey=" + token + "&metric=true")
      .then(response => {
        dispatch(loadForecast(response.data.DailyForecasts))
      });
  }
};

export const loadForecast = (new5Days) => {
  return {
    type: GET_FORECAST,
    days: new5Days // array of 5 days
  };
};
