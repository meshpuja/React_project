import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <div>Opps!!! {error.status} </div>;
};
export default Error;
