import { IMG_URL } from "../utils/constant";
const RestroCard = (prop) => {
  const { resData } = prop;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="restro-card-container bg-gray-100 w-52 rounded-md m-2 p-4 hover:bg-gray-300">
      <img
        className="retro-image rounded-md"
        alt="retro-image"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold py-2">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
export const withPromoted = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 rounded-md">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
