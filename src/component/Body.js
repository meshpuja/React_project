import RestroCard from "./RestroCard";

import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0547641&lng=72.9102511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resList.json();
    setlistOfRes(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRes(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    //console.log(data);
  };

  if (listOfRes.length === 0) {
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
              const filteredList = listOfRes.filter((res) =>
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
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestroCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
