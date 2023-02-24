import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import {FaTypo3} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [color, setColor] = useState("#000");

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      setColor("#000");
    } else {
      setScrollNav(false); 
      setColor("#000");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
        return()=>{
          listen();
        }

  }, []);

  const userSignOut = ()=>{
    signOut(auth).then(()=>{
      window.alert("Signed Out Successfully")
    })
  }


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} style={{ background: { color } }}>
          <NavbarContainer>
            <NavLogo to="/home" onClick={toggleHome}>
              <FaTypo3 /> SkyReference
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {authUser ? (
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="/home"
                    smooth={1}
                    duration={500}
                    spy={1}
                    exact="true"
                    offset={-80}
                  >
                    Home
                  </NavLinks>
                </NavItem>

                <NavBtn>
                  <NavBtnLink
                   to="/"
                   onClick={userSignOut}
                   >Sign Out</NavBtnLink>
                </NavBtn>

                {/* // <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                // 	<li className='nav-item'>
                // 		<span className='text-dark nav-link'>
                // 		
                // 		</span>
                // 	</li>
                // 	<button
                // 		className='btn btn-outline-danger m-2'
                // 		onClick={signOut}>
                // 		Logout
                // 	</button>
                // </ul> */}

                {/* <NavBtnLink
                  className="btn btn-outline-danger m-4"
                //  onClick={signOut}
                >
                  Logout
                </NavBtnLink> */}
              </NavMenu>
            ) : null}
            {/* <NavBtn>
                <NavBtnLink to="/login">Sign In</NavBtnLink>
              </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
