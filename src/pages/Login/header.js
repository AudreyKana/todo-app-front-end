import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./css/S_header.css";

export default function Header(props) {
  let { user, logout } = useContext(AuthContext);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="h_container">
      <div className="h_topText">
        <label className="h_everdo"> EverDo - </label> MVP{" "}
      </div>
      <div className="h_nav">
        <h1 className="text-6xl">{props.title}</h1>,
        <div className="h_list">
          {(toggleMenu || largeur > 500) && (
            <div className="">
              <div className="flex space-x-20 mr-0 border-b-2 border-blue-500">
                {user && (
                  <p className="font-sans font-bold flex-col">
                    {" "}
                    <nav>Hello</nav>{" "}
                    <nav className="text-blue-500">{user.username}</nav>
                  </p>
                )}
                {user && (
                  <button
                    className="mt-2 bg-blue-500 rounded-xl text-white font-bold border-current pl-1.5 pr-1.5 pt-0 pb-0 mr-0 max-h-8"
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
              </div>
              <ul className="liste">
                <label className="items">
                  {" "}
                  <div className="a_btn"> All </div>
                </label>
                <label className="items">1h</label>
                <label className="items">2h</label>
                <label className="items">Work</label>
              </ul>
            </div>
          )}
        </div>
        <button onClick={toggleNavSmallScreen} className="btn">
          BTN
        </button>
      </div>
      <div className="l_list">
        <label className="l_item1">
          <span className="number">10 </span> Todos
        </label>
        <label className="l_item">
          <nav className="number2">3 </nav> Notes
        </label>
        <label className="l_item">Links</label>
        <label className="l_item">Files</label>
      </div>
    </div>
  );
}
