import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Home = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      setSearchRes(listOfRes);
    } else {
      const filteredRes = listOfRes.filter((res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchRes(filteredRes);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();

    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <h2>Loading...</h2>
  ) : (
    <div className="pb-10">
      <div className="w-1/2 mx-auto py-5">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          value={searchText}
          onChange={handleSearch}
          className="w-full border border-[#b1b1b1] px-5 py-3 rounded-[50px] outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-5 mt-6">
        {searchRes.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="w-[32%]"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
