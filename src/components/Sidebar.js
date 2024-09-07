import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sidebarData = [
  {
    buttons: [
      {
        icon: <HomeOutlinedIcon />,
        text: "Home",
        link: "/",
      },
      {
        icon: <SubscriptionsOutlinedIcon />,
        text: "Shorts",
      },
      {
        icon: <VideoLibraryOutlinedIcon />,
        text: "Subscriptions",
      },
    ],
  },
  {
    heading: "You",
    buttons: [
      {
        icon: <AccountBoxOutlinedIcon />,
        text: "Your channel",
      },
      {
        icon: <HistoryOutlinedIcon />,
        text: "History",
      },
      {
        icon: <VideocamOutlinedIcon />,
        text: "Your videos",
      },
      {
        icon: <OndemandVideoOutlinedIcon />,
        text: "Watch Later",
      },
    ],
  },
  {
    heading: "Subscriptions",
    buttons: [
      {
        icon: "",
        text: "NeuralNine",
      },
    ],
  },
];

const sidebarIcons = [
  <HomeOutlinedIcon />,
  <SubscriptionsOutlinedIcon />,
  <AccountBoxOutlinedIcon />,
  <OndemandVideoOutlinedIcon />,
  <VideoLibraryOutlinedIcon />,
];

const Sidebar = () => {
  const isOpen = useSelector((state) => state.menu.isMenuOpen);

  if (isOpen){
    const sidebars = [];
    sidebarData.forEach(sidebar=>{
      sidebars.push(...sidebar.buttons)
    })

    return (
      <div className=" pl-1 w-fit">
        {sidebars.map((button) => {
          return (
            <Link to = {button.link}>
            <div className="my-3 rounded-lg hover:bg-[rgb(242,242,242)] py-3 px-5">
              {button.icon}
            </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="pl-2 w-48">
      {sidebarData.map((section) => {
        return (
          <div>
            <div className="my-3">
              {section.heading && (
                <h1 className="pl-3 my-1 font-semibold">{section.heading}</h1>
              )}

              {section.buttons.map((button) => (
                <Link to={button.link}>
                  <div className="hover:bg-[rgb(242,242,242)] py-2 rounded-lg text-sm hover:font-semibold justify-start pl-5 flex align-bottom">
                    <div className="pr-3">{button.icon}</div>
                    <div>{button.text}</div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className=""></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
