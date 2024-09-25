import React from "react";
import { IMG_URL } from "../utils/constants";
import ratings from "../assets/ratings.svg";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { slaString, lastMileTravelString } = resData?.info?.sla;

  return (
    <div className="p-4 hover:border border-[#e8e8e8] rounded-2xl cursor-pointer hover:shadow-[rgba(28,28,28,0.12)_0px_0.4rem_1.8rem]">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <div className="flex justify-between items-center mt-2 text-[#1c1c1c]">
        <h4 className="text-lg font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[80%]">
          {name}
        </h4>

        <div className="flex items-center gap-1">
          <img src={ratings} alt="ratings" />
          <span className="font-light">{avgRating}</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[#696969] text-sm mt-1 mb-1.5 font-light">
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[70%]">
          {cuisines.join(", ")}
        </p>
        <p>{costForTwo}</p>
      </div>

      <div className="flex justify-between items-center text-[#9c9c9c] text-sm font-light">
        <p>{slaString}</p>
        <p>{lastMileTravelString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
