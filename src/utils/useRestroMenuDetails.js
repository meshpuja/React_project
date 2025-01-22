import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestroMenuDetails = (resId) => {
  [restroDetail, setrestroDetail] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/" + MENU_URL + resId
    );
    const json = await data.json();
    setrestroDetail(json);
  };

  return restroDetail;
};

export default useRestroMenuDetails;
