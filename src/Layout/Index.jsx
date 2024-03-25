import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Index({ children }) {
  const [userProfile, setProfile] = useState(false);
  function handleProfile() {
    setProfile(!userProfile);
  }
  let sideBar = localStorage.getItem("sideBar");
  const [hideText, setHideText] = useState(sideBar);
  useEffect(() => {
    localStorage.setItem("sideBar", hideText);
  }, [hideText]);
  const toggleTextVisibility = () => {
    setHideText(!hideText);
    localStorage.setItem("sideBar", !hideText);
  };
  console.log(sideBar, hideText, "fdghjkl");

  return (
    <div>
      <NavBar
        toggleTextVisibility={toggleTextVisibility}
        handleProfile={handleProfile}
      />
      <SideBar hideText={hideText} children={children} />
    </div>
  );
}
