import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { SUGGESTIONS_URL } from "../constants";
import { showMenu, toggleMenu } from "../redux/menuSlice";

import axios from "axios";

const Suggestions = ({ suggestions, handleSuggestion, setFocus }) => {
  return (
    <div className="w-full flex flex-col relative bg-white shadow-sm pt-3 pb-3 shadow-neutral-400  top-1 rounded-lg">
      {suggestions.map((suggestion) => {
        return (
          <>
            <div
              className="flex align-middle gap-3 px-4 py-1 hover:bg-gray-100 cursor-default "
              onMouseDown={() => {
                handleSuggestion(suggestion);
              }}
            >
              <svg
                className="h-4 w-4 relative top-[6px] "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
              </svg>
              <div>{suggestion}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const [focus, setFocus] = useState(false);

  const handleSuggestion = (suggestion) => {
    console.log("called");
    setSearchQuery(suggestion);
    navigate("/results?search_query=" + suggestion);
  };

  const getSuggestions = async () => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const options = {
      method: "GET",
      url: "https://auto-suggest-queries.p.rapidapi.com/suggestqueries",
      params: { query: searchQuery },
      headers: {
        "X-RapidAPI-Key": "7cfc712406msh5422dc13c934fc1p12d1e2jsn3b5ee885cc27",
        "X-RapidAPI-Host": "auto-suggest-queries.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSuggestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => getSuggestions(), 100); // Debouncing

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);
  
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-3 ml-1">
        <img
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          className="w-8 mx-3 hover:cursor-pointer"
          onClick={() => dispatch(toggleMenu())}
        />
        <Link to="/">
          <img
            alt="logo"
            src="https://wallpapers.com/images/featured/youtube-logo-background-xuljaasdgk44enmb.jpg"
            className="w-24"
          />
        </Link>
      </div>
      <div
        className="col-span-10 flex mt-3"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div className="w-1/2 h-9 ">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" text-black border w-full h-full px-5 pb-1 focus:outline-[rgb(45,110,190)]  leading-tight rounded-l-full border-gray-300 shadow-inner"
          />
          {suggestions.length !== 0 && searchQuery && focus && (
            <Suggestions
              suggestions={suggestions}
              handleSuggestion={handleSuggestion}
              setFocus={setFocus}
            />
          )}
        </div>
        <div>
          <Link to={"/results?search_query=" + searchQuery}>
            <button className="bg-gray-50 p-2 px-5 h-9 rounded-r-full border hover:bg-gray-100 border-gray-300 border-l-0">
              <svg
                className="h-5 w-5 fill-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="col-span-1"></div> */}
    </div>
  );
};

export default Header;
