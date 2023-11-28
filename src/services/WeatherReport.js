export const getWeatherReport = (cityName = "pune") => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aaab9223e458518b5949e5298b6c8f99`
  ).then((res) => res.json());
};

export const getWeatherReportBYCoordinates = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aaab9223e458518b5949e5298b6c8f99`
  ).then((res) => res.json());
};

export const timestampToTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
};
