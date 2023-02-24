import React, { useContext, useEffect, useState } from "react";
import {
       SidebarContainer,
       Icon,
       CloseIcon,
       SideBtnWrap,
       SidebarMenu,
       SidebarRoute,
       SidebarWrapper,
       SidebarLink,
} from './SidebarElements';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";



const Sidebar = ({isOpen, toggle}) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      window.alert("Signed Out Successfully");
    });
  };

    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        {authUser ? (
        <SidebarWrapper>
          <SidebarMenu>
        
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
            
          </SidebarMenu>
       
           
         
            <SideBtnWrap>
              <SidebarRoute
                className="btn btn-outline-danger m-2"
                onClick={userSignOut}
              >
                Logout
              </SidebarRoute>
            </SideBtnWrap>
         
        </SidebarWrapper>):null}
      </SidebarContainer>
    );
}

export default Sidebar
