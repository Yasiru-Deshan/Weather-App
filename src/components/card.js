import React,{ useEffect, useState} from "react";
import axios from 'axios';
import sun from './../images/sun-svgrepo-com.svg';
import cloud from './../images/cloudy-cloud-svgrepo-com.svg';
import lowcloud from './../images/sun-behind-cloud-svgrepo-com.svg';
import lowrain from './../images/sun-behind-rain-cloud-svgrepo-com.svg';
import snow from './../images/snow-svgrepo-com.svg';
import rain from './../images/rain-svgrepo-com.svg';
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
   const setCel = (num) => {
     return Math.round(num - 273.15);
   };
 useEffect(() => {
   Aos.init({ duration: 500 });
 }, []);

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        width: "80%",
        padding: "40px",
        marginTop: "20px",
        borderRadius: "4px",
        // backgroundColor:"white",
        // position:"relative",
        // zIndex:"3",
        // opacity:"0.3",
        boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
      }}
    >
      <h2 style={{ color: "white" }}>{props.city}</h2>

      <p style={{ fontSize: "60px", color: "white" }}>
        {props.weather.main === "Clear" ? (
          <img data-aos="fade-right"
            
            style={{ width: "50px", height: "50px" }}
            src={sun}
            alt=""
          />
        ) : props.weather.main === "Clouds" ? (
          <img data-aos="fade-right"
            style={{ width: "50px", height: "50px" }}
            src={lowcloud}
            alt=""
          />
        ) : props.weather.main === "Snow" ? (
          <img data-aos="fade-right" style={{ width: "50px", height: "50px" }} src={snow} alt="" />
        ) : props.weather.main === "Rain" ? (
          <img data-aos="fade-right" style={{ width: "50px", height: "50px" }} src={rain} alt="" />
        ) : null}
        {props.celcius} °C
      </p>
      <p style={{ color: "white" }}>{props.weather.main}</p>
      <p style={{ fontSize: "14px", color: "white" }}>
        Feels Like {setCel(props.degree.feels_like)}° Wind {props.wind.speed}
        km/h Visibility {props.visibility / 1000} km
      </p>
      <p style={{ fontSize: "14px", color: "white" }}>
        Minimum {setCel(props.degree.temp_min)}°C Maximum{" "}
        {setCel(props.degree.temp_max)}°C
      </p>
      <p style={{ fontSize: "14px", color: "white" }}>
        Pressure {props.degree.pressure} Humidity {props.degree.humidity}%
      </p>
    </div>
  );
};

export default Card;
