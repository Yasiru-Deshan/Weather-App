import React from "react";
import LoginForm from "../components/loginForm";
import "./LoginPage.css";
import video from "./../videos/video3.mp4";

const LoginPage = () => {
  return (
    <div className="LoginContainer">
      <div>
        <video
          autoPlay
          loop
          src={video}
          type="video/mp4"
          style={{
            width: "100%",
            objectFit: "cover",
            height:"750px"
          }}
        />
      </div>

      <div
        style={{
          zIndex: 3,
          position: "relative",
          padding: "8px 24px",
          margin: "auto",
          marginTop:"-700px"
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
