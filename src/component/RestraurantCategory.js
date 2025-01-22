import { useState } from "react";
import ItemList from "./ItemList";

const RestraurantCategory = ({ data, showHide, setshowHide }) => {
  //const [showHide, setshowHide] = useState(false);
  const handleClick = () => {
    setshowHide();
  };
  return (
    <div>
      <div className="w=6/12" onClick={handleClick}>
        <div className="flex justify-between w=6/12 bg-gray-50 shadow-md p-3 my-4">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <div>🔽</div>
        </div>
        <div>
          <div>{showHide && <ItemList itemlist={data.itemCards} />}</div>
        </div>
      </div>

      {/** restaurant accordian */}
    </div>
  );
};

export default RestraurantCategory;
