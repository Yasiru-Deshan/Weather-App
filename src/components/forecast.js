import React, {useEffect, useState} from "react";
import sun from "./../images/sun-svgrepo-com.svg";
import cloud from "./../images/cloudy-cloud-svgrepo-com.svg";
import lowcloud from "./../images/sun-behind-cloud-svgrepo-com.svg";
import lowrain from "./../images/sun-behind-rain-cloud-svgrepo-com.svg";
import snow from "./../images/snow-svgrepo-com.svg";
import rain from "./../images/rain-svgrepo-com.svg";
import ForeCastItem from "./forecastItem";
import moment from 'moment';
import Aos from "aos";
import "aos/dist/aos.css";

const ForeCast = (props)=>{
const setCel = (num) => {
  return Math.round(num - 273.15);
};
const date = moment();
const currentDate = date.format('D');

let tomorrow = date.clone().add(1,'days')
tomorrow = tomorrow.format("D");

let datomorrow = date.clone().add(2, "days");
datomorrow = datomorrow.format("D");

useEffect(() => {
  Aos.init({ duration: 1500 });
}, []);
    return (
      <div>
        <div
          style={{
            width: "80%",
            margin: "auto",
            backgroundColor: "transparent",
            //opacity: "0.5",
            height: "200px",
            display: "grid",
            gridGap: "80px",
            padding: "20px",
            grid: "auto/ auto auto auto",
          }}
        >
          <div
            data-aos="fade-right"
            style={{
              background: "white",
              height: "80%",
              padding: "20px",
              position: "relative",
              zIndex: "5",
              borderRadius: "5px",
              border: "1px solid white",
              boxShadow: "10px 20px 50px 1px black",
            }}
          >
            <h4 style={{ textAlign: "center" }}>{currentDate} th</h4>
            <p
              style={{ fontSize: "40px", color: "black", textAlign: "center" }}
            >
              {props.weather.main === "Clear" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={sun}
                  alt=""
                />
              ) : props.weather.main === "Clouds" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={lowcloud}
                  alt=""
                />
              ) : props.weather.main === "Snow" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={snow}
                  alt=""
                />
              ) : props.weather.main === "Rain" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={rain}
                  alt=""
                />
              ) : null}
              {props.celcius} °C
            </p>
            <p style={{ color: "black", textAlign: "center" }}>Clouds</p>
          </div>
          <div
            data-aos="fade-up"
            style={{
              background: "white",
              height: "80%",
              padding: "20px",
              position: "relative",
              zIndex: "5",
              borderRadius: "5px",
              border: "1px solid white",
              boxShadow: "10px 20px 50px 1px black",
            }}
          >
            <h4 style={{ textAlign: "center" }}>{tomorrow} th</h4>
            <p
              style={{ fontSize: "40px", color: "black", textAlign: "center" }}
            >
              {props.weather.main === "Clear" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={sun}
                  alt=""
                />
              ) : props.weather.main === "Clouds" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={lowcloud}
                  alt=""
                />
              ) : props.weather.main === "Snow" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={snow}
                  alt=""
                />
              ) : props.weather.main === "Rain" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={rain}
                  alt=""
                />
              ) : null}
              {props.celcius} °C
            </p>
            <p style={{ color: "black", textAlign: "center" }}>Clouds</p>
          </div>
          <div
            data-aos="fade-left"
            style={{
              background: "white",
              height: "80%",
              padding: "20px",
              position: "relative",
              zIndex: "5",
              borderRadius: "5px",
              border: "1px solid white",
              boxShadow: "10px 20px 50px 1px black",
            }}
          >
            <h4 style={{ textAlign: "center" }}>{datomorrow} th</h4>
            <p
              style={{ fontSize: "40px", color: "black", textAlign: "center" }}
            >
              {props.weather.main === "Clear" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={sun}
                  alt=""
                />
              ) : props.weather.main === "Clouds" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={lowcloud}
                  alt=""
                />
              ) : props.weather.main === "Snow" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={snow}
                  alt=""
                />
              ) : props.weather.main === "Rain" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={rain}
                  alt=""
                />
              ) : null}
              {props.celcius} °C
            </p>
            <p style={{ color: "black", textAlign: "center" }}>Clouds</p>
          </div>
        </div>
      </div>
    );
}

export default ForeCast;

