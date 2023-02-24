import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import Card from "react-bootstrap/Card";
//import Image from "../Images/surge-black-logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e)=>{
       e.preventDefault();
       signInWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
              console.log(userCredential)
       }).catch((error)=>{
console.log(error)
       })
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="text-center"
          style={{
            backgroundColor: "white",
            width: "calc(100px + 24vw)",
            marginTop: "5rem",
            marginBottom: "5rem",
            // boxShadow: "5px 8px 25px ",
            border: "1px solid #B7B7B9 ",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          <Card.Body>
            <div
              style={{
                fontSize: "40px",
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "25px",
              }}
            >
              SkyReference
            </div>
            <div style={{ marginTop: "30px" }}>
              <form onSubmit={signIn}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    value={email}
                    required
                    placeholder="yasiru@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  {/* <Link to="/home"> */}
                    <button
                      style={{
                        background: "#01bf71",
                        width: "100%",
                        border: "none",
                        color: "white",
                        padding: "12px 30px",
                      }}
                      type="submit"
                    >
                      Login
                    </button>
                 
                </div>
              </form>
            </div>
            
          </Card.Body>
        </div>
       
      </div>
    </div>
  );
};

export default LoginForm;
