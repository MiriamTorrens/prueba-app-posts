import { Navigate } from "react-router-dom";

interface Props {
  component: React.FunctionComponent;
}
const PrivateRoute = ({ component }: Props) => {
  const auth = localStorage.getItem("token");
  const RouteComponent = component;
  return auth ? <RouteComponent /> : <Navigate to="/login" />;
};

export default PrivateRoute;
