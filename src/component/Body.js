import RestroCard from "./RestroCard";

import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0547641&lng=72.9102511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resList.json();
    setlistOfRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRes?.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt)
              );
              setfilteredRes(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes?.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestroCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
