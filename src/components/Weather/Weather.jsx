import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Weather.module.css";
import {
  getWeatherReport,
  getWeatherReportBYCoordinates,
  timestampToTime,
} from "../../services/WeatherReport";
import Container from "../Container/Container";
import { Spinner } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherDetails, setWeatherDetails] = useState("");
  const [location, setLocation] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [date, setDate] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const tempCel = parseInt(weatherDetails.temp) - 273.15;
  const tempCelFixed = tempCel.toFixed(2);

  const minTemp = parseInt(weatherDetails.temp_min) - 273.15;
  const minTempFixed = minTemp.toFixed(2);

  const maxTemp = parseInt(weatherDetails.temp_max) - 273.15;
  const maxTempFixed = maxTemp.toFixed(2);

  const Humidity = weatherDetails.humidity;
  const wind = windSpeed.speed;

  useEffect(() => {
    setIsLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get weather data using geolocation
          getWeatherReportBYCoordinates(
            position.coords.latitude,
            position.coords.longitude
          )
            .then((res) => {
              if (res.cod == 200) {
                setWeatherDetails(res.main);
                setLocation(res.name);
                setWindSpeed(res.wind);
                setSunrise(timestampToTime(res.sys.sunrise));
                setSunset(timestampToTime(res.sys.sunset));
                setIsError(false);
                setIsLoader(false);
              } else if (res.cod !== 404) {
                setIsError(true);
                setErrorMsg("City Not Found, Enter Valid city...!");
                setIsLoader(false);
              } else {
                setErrorMsg("Something went wrong Please try again later...!");
                setIsLoader(false);
              }
            })
            .catch(() => {
              setErrorMsg("Something went wrong Please try again later...!");
              setIsLoader(false);
            });
        },
        () => {
          setCityName("Pune");
        }
      );
    } else {
      window.alert("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => {
    setIsLoader(true);
    if (cityName) {
      getWeatherReport(cityName)
        .then((data) => {
          if (data.cod == 200) {
            setWeatherDetails(data.main);
            setLocation(data.name);
            setWindSpeed(data.wind);
            setSunrise(timestampToTime(data.sys.sunrise));
            setSunset(timestampToTime(data.sys.sunset));
            setIsError(false);
            setIsLoader(false);
          } else if (data.cod !== 404) {
            setIsError(true);
            setErrorMsg("City Not Found, Enter Valid city...!");
            setIsLoader(false);
          } else {
            setIsError(true);
            setErrorMsg("Something went wrong Please try again later...!");
            setIsLoader(false);
          }
        })
        .catch(() => {
          setErrorMsg("Something went wrong Please try again later...!");
          setIsLoader(false);
        });
    }
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    setDate(formattedDate);
  }, [cityName]);

  const onChangeHandler = (data) => {
    setCity(data);
  };

  const onClickHandler = () => {
    if (city.trim().length) {
      setCityName(city);
      setCity("");
    } else {
      alert("enter a valid city name");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="mt-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12276/12276416.png"
            width="10%"
            height="10%"
            style={{ marginRight: "10%" }}
          />
          <Input
            className={styles.input}
            onChangeHandler={onChangeHandler}
            enterKeyHandler={onClickHandler}
            value={city}
            placeholder="Search a city"
          ></Input>
          <Button
            className={
              city.trim().length
                ? `${styles.buttonEnabled}`
                : `${styles.button}`
            }
            disabled={!city.trim().length}
            onClickHandler={onClickHandler}
          >
            Search
          </Button>
        </div>
        {!isError && !isLoader && (
          <>
            <Container
              weatherDetails={tempCelFixed}
              minTemp={minTempFixed}
              maxTempFixed={maxTempFixed}
              Humidity={Humidity}
              windSpeed={wind}
              LocationName={location}
              date={date}
              sunrise={sunrise}
              sunset={sunset}
            ></Container>
          </>
        )}
        {isError && !isLoader && (
          <div style={{ marginTop: "8rem" }}>
            <p
              style={{ color: "yellow", fontSize: "2rem", fontWeight: "bold" }}
            >
              {errorMsg}
            </p>
          </div>
        )}
        {isLoader && (
          <>
            <Spinner
              animation="grow"
              variant="warning"
              style={{ width: "60px", height: "60px", marginTop: "15%" }}
            />
          </>
        )}
      </div>
    </>
  );
};
export default Weather;
