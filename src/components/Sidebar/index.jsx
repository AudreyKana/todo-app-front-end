import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import jwt_decode from "jwt-decode";

export default function Sidebar(props) {
  let [token, setToken] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : null
  );

  const navigate = useNavigate();

  let logoutUser = () => {
    setToken(null);
    setUser(null);
    window.location.reload();
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <aside className="p-8 w-64 bg-gray-100 flex flex-col justify-between">
      <div>
        <nav>
          <ul>
            {sidebarData.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button
            className="w-28  ml-4 p-2.5 bg-blue-400 rounded-md border-none text-white text-x flex"
            onClick={logoutUser}
          >
            <BiIcons.BiLogOut color="none" size={20} />
            Logout
          </button>
        </div>
      </div>

      <div>
        {user && (
          <button
            className="btn-add animate-pulse"
            onClick={() => props.showPopup(true)}
          >
            <AiIcons.AiOutlinePlus color="white" size={25} />
          </button>
        )}
      </div>
    </aside>
  );
}
