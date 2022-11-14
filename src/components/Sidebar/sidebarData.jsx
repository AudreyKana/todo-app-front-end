import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

export const sidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icons: <AiIcons.AiOutlineDashboard />,
  },
  {
    title: "Today",
    path: "/Today",
    icons: <AiIcons.AiOutlineStar />,
  },
  {
    title: "Upcoming",
    path: "/Upcoming",
    icons: <AiIcons.AiOutlineCalendar />,
  },
  {
    title: "Anytime",
    path: "/Anytime",
    icons: <AiIcons.AiOutlineMedicineBox />,
  },
  {
    title: "Someday",
    path: "/Someday",
    icons: <BiIcons.BiBox />,
  },
  {
    title: "Trash",
    path: "/Trash",
    icons: <BsIcons.BsTrash />,
  },
];
