import { IMG_URL } from "../utils/constant";
const RestroCard = (prop) => {
  const { resData } = prop;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="restro-card-container"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="retro-image"
        alt="retro-image"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
export default RestroCard;
