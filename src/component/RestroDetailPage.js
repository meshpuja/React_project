import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenuDetails from "../utils/useRestroMenuDetails";
const RestroDetail = () => {
  const { resId } = useParams();
  const restroDetail = useRestroMenuDetails(resId);
  if (restroDetail.length === 0) {
    return;
  }
  //data.cards[0].card.card.info
  const { name, cuisines, costForTwoMessage } =
    restroDetail?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restroDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;
  return (
    <div className="detail-page">
      <h2>{name}</h2>
      <h2>
        {cuisines} - {costForTwoMessage}
      </h2>
      <ul>
        {itemCards?.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - {"Rs." + res.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestroDetail;
