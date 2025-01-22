import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenuDetails from "../utils/useRestroMenuDetails";
import RestraurantCategory from "./RestraurantCategory";
const RestroDetail = () => {
  const { resId } = useParams();
  const restroDetail = useRestroMenuDetails(resId);
  const [showHide, setshowHide] = useState(0);
  if (restroDetail.length === 0) {
    return;
  }
  //data.cards[0].card.card.info
  const { name, cuisines, costForTwoMessage } =
    restroDetail?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restroDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;
  const category =
    restroDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  console.log(category);
  return (
    <div className="w-6/12 m-auto">
      <h2 className="font-bold text-xl py-2 text-center">{name}</h2>
      <h2 className="font-bold text-sm py-1 text-center">
        {cuisines} - {costForTwoMessage}
      </h2>
      <p>
        {category.map((cat, index) => (
          <div>
            <RestraurantCategory
              key={cat.card.card.id}
              data={cat.card.card}
              showHide={index == showHide && true}
              setshowHide={() => setshowHide(index)}
            />
          </div>
        ))}
      </p>
    </div>
  );
};
export default RestroDetail;
