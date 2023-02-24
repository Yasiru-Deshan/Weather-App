import React, { useEffect, useState, useRef } from "react";
import Card from "../components/card";
import ForeCast from "../components/forecast";
import cloudy from "./../images/360_F_310457894_HIpFBaxSQxiptoVgx0y1o4ZGXyH92YO9.jpg";
import lightning from "./../images/istockphoto-1007768414-170667a.jpg";
import sun from "./../images/sun-summer-blue-sky.jpg";
import rain from "./../images/istockphoto-1429701799-170667a.jpg";
import axios from "axios";

const Home = ()=>{

    const [city, setCity] = useState();
    const [degree, setDegree] = useState({});
    const [dateMain, setDateMain] = useState({});
    const [weather, setWeather] = useState([]);
    const [celcius, setCelcius] = useState();
    const [wind, setWind] = useState({});
    const [visibility, setVisibility] = useState();
    const [dateList, setDateList] = useState([]);
    const [cod, setCod] = useState();
    const lat = useRef();
    const long = useRef();

    useEffect(() => {
      const getColomboWeather = () => {
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=38da9f7c4a60606e7539f438491f3f68"
          )
          .then((res) => {
            setCity(res.data.name);
            setWeather(res.data.weather[0]);
            setDegree(res.data.main);
            setWind(res.data.wind);
            setVisibility(res.data.visibility);
            console.log(city)
          });
      };
      getColomboWeather();
    }, []);



        useEffect(() => {
          const getForcast = () => {
            axios
              .get(
                "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=38da9f7c4a60606e7539f438491f3f68"
              )
              .then((res) => {
                setDateList(res.data.list);
                setCod(res.data.cod);
              });
          };
          getForcast();
        }, [lat,long]);
    

    useEffect(() => {
      setCelcius(Math.round(degree.temp - 273.15));
    }, [degree]);

    const getCurrentWeather =()=>{
       let latitude = lat.current.value;
       let longitude = long.current.value;
       console.log(latitude);
       console.log(longitude);
       axios
         .get(
           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=38da9f7c4a60606e7539f438491f3f68`
         )
         .then((res) => {
           setCity(res.data.name);
           setWeather(res.data.weather[0]);
           setDegree(res.data.main);
           setWind(res.data.wind);
           setVisibility(res.data.visibility);
         });
    }

    return (
      <div>
        {" "}
        <div>
          <img
            // autoPlay
            // muted
            // loop
            alt=""
            src={sun}
            // type="video/mp4"
            style={{
              width: "100%",
              objectFit: "cover",
              height: "750px",
            }}
          />
        </div>
        <div style={{ width: "35%", margin: "auto", marginTop: "-650px" }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter Lat"
              ref={lat}
            />
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter Long"
              ref={long}
              style={{ marginLeft: "10px" }}
            />
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ marginLeft: "10px" }}
              onClick={getCurrentWeather}
            >
              search
            </button>
          </div>

          <Card
            city={city}
            degree={degree}
            weather={weather}
            celcius={celcius}
            wind={wind}
            visibility={visibility}
          />
        </div>
        <ForeCast
          city={city}
          degree={degree}
          weather={weather}
          celcius={celcius}
          wind={wind}
          visibility={visibility}
        />
      </div>
    );
}

export default Home;