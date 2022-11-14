import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import * as AiIcons from "react-icons/ai";

export default function Sidebar(props) {
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
  
      </div>
      <div>
        <button className="btn-add animate-pulse" onClick={() =>  props.showPopup(true) }>      
          <AiIcons.AiOutlinePlus color="white" size={25} />
        </button>
      </div>
    </aside>
  );
}
