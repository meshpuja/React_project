import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, [onlineStatus]);

  return onlineStatus;
};
export default useOnlineStatus;
