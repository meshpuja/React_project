import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cardSlice";

const CartPage = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //console.log(cartItem + "@@@@@ cartItem");
  return (
    <div className="w-6/12 m-auto p-4 ">
      <button
        className="bg-gray-100 rounded-md m-2 p-2"
        onClick={() => {
          dispatch(clearItems());
        }}
      >
        Clear Cart
      </button>
      <ItemList itemlist={cartItem} />;
    </div>
  );
};
export default CartPage;
