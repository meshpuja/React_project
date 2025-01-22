import RestroCard, { withPromoted } from "./RestroCard";

import { useContext, useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromoted } from "./RestroCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { setuserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const RestroCardPromted = withPromoted(RestroCard);
  const fetchData = async () => {
    const resList = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0547641&lng=72.9102511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resList.json();
    setlistOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(data);
  };
  if (onlineStatus === false) {
    return <h2>You'r offline</h2>;
  }
  if (listOfRes?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="restro-container">
      <div className="filter flex">
        <div className="search-box ml-2 ">
          <input
            type="text"
            className="search border-solid border-2 rounded-md"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn bg-green-200 rounded-lg p-1 ml-2 text-md"
            onClick={() => {
              const filteredList = listOfRes?.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt)
              );
              setfilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-green-200 rounded-lg p-1 ml-2 text-md"
          onClick={() => {
            const filteredList = listOfRes?.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="filter-btn bg-green-200 rounded-lg p-1 ml-2 text-md text-white border border-black "
          placeholder="Add user name"
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRes?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.isOpen ? (
              <RestroCardPromted resData={res} />
            ) : (
              <RestroCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
