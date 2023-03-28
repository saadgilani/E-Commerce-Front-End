import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoutes=({children})=>{
  const location=useLocation();
  const userLoggedIn=localStorage.getItem("user");
  console.log(userLoggedIn);
  if(!userLoggedIn){
    return <Navigate to="/login" state={{location}}/>
  }

  return children;

}

export default PrivateRoutes;