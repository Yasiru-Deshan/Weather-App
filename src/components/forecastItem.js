import React from "react";
import sun from "./../images/sun-svgrepo-com.svg";
import cloud from "./../images/cloudy-cloud-svgrepo-com.svg";
import lowcloud from "./../images/sun-behind-cloud-svgrepo-com.svg";
import lowrain from "./../images/sun-behind-rain-cloud-svgrepo-com.svg";
import snow from "./../images/snow-svgrepo-com.svg";
import rain from "./../images/rain-svgrepo-com.svg";

const ForeCastItem = (props) => {
    const setCel = (num) => {
      return Math.round(num - 273.15);
    };
    const date = props.dateList[0];
    console.log(props);
    console.log(props.dateList[0]);
    console.log(date.dt)
  return (
    <div
      style={{
        background: "white",
        height: "80%",
        padding: "20px",
        position: "relative",
        zIndex: "5",
        borderRadius: "5px",
      }}
    >
      <h4 style={{ textAlign: "center" }}>{}</h4>
      <p style={{ fontSize: "40px", color: "black", textAlign: "center" }}>
        {/* {weather.main === "Clear" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={sun}
                  alt=""
                />
              ) : weather.main === "Clouds" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={lowcloud}
                  alt=""
                />
              ) : weather.main === "Snow" ? ( */}
        <img style={{ width: "50px", height: "50px" }} src={snow} alt="" />
        {/* ) : weather.main === "Rain" ? (
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={rain}
                  alt=""
                />
              ) : null} */}
        {/* {setCel(props.dateMain[0].temp_max)} °C */}
      </p>
      <p style={{ color: "black", textAlign: "center" }}>Clouds</p>
    </div>
  );
};

export default ForeCastItem;

