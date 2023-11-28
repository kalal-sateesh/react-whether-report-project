import PropTypes from "prop-types";
import styles from "./Container.module.css";
const Container = ({
  weatherDetails = "",
  LocationName = "Hyderabad",
  minTemp = "",
  maxTempFixed = "",
  Humidity = "",
  windSpeed = "",
  date = null,
  sunrise = "",
  sunset = "",
}) => {
  return (
    <>
      <div className={styles.date}>{date}</div>
      <div className={styles.cityName}>{LocationName}</div>
      <div className={styles.city}>
        <div>
          <img
            src="https://weather-app-isrhcoders-projects.vercel.app/Images/temperature-svgrepo-com.svg"
            width="50px"
            height="50px"
          />
        </div>
        <div>{weatherDetails} °C</div>
      </div>
      <div className={styles.minTemp}>
        <div>
          {" "}
          <span className="me-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1684/1684425.png"
              width="20px"
              height="30px"
            />
          </span>
          Min Temperature:{minTemp} °C
        </div>
        <div>
          {" "}
          <span className="me-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1684/1684375.png"
              width="20px"
              height="30px"
            />
          </span>
          Max Temperature:{maxTempFixed} °C
        </div>
      </div>

      <div className={styles.minTemp}>
        <div>
          {" "}
          <span className="me-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6631/6631558.png"
              width="20px"
              height="30px"
            />
          </span>
          sunrise:{sunrise}
        </div>
        <div>
          {" "}
          <span className="me-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6631/6631237.png"
              width="20px"
              height="30px"
            />
          </span>
          sunset:{sunset} 
        </div>
      </div>

      <div className={styles.humidity}>
        <div>
          <span className="me-2">
            <img
              src="https://weather-app-isrhcoders-projects.vercel.app/Images/humidity-svgrepo-com.svg"
              width="50px"
              height="50px"
            />
          </span>
          Humidity : {Humidity} %
        </div>
        <div>
          {" "}
          <span className="me-2">
            <img
              src="https://weather-app-isrhcoders-projects.vercel.app/Images/wind-sign-wind-svgrepo-com.svg"
              width="50px"
              height="50px"
            />
          </span>
          Wind Speed : {windSpeed} km/hr
        </div>
      </div>
    </>
  );
};
Container.propTypes = {
  weatherDetails: PropTypes.string,
  LocationName: PropTypes.string,
  minTemp: PropTypes.string,
  maxTempFixed: PropTypes.string,
  Humidity: PropTypes.number,
  windSpeed: PropTypes.number,
  date: PropTypes.string,
  sunset: PropTypes.string,
  sunrise: PropTypes.string,
};
export default Container;
