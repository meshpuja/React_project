import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cardSlice";
const ItemList = ({ itemlist }) => {
  console.log(itemlist);
  const dispatch = useDispatch();
  return (
    <div className="p-2 m-2 border-b-2">
      {itemlist.map((item) => (
        <div key={item.card.info.id} className="flex justify-between">
          <div className="w-9/12">
            <div className="font-bold">{item.card.info.name}</div>
            <div>
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <div className="py-4 shadow-sm text-sm">
              {item.card.info.description}
            </div>
          </div>

          <div className="w-3/12">
            <div className="absolute">
              <button
                className="rounded-sm bg-black text-white px-2"
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add +
              </button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
