import { Link } from "react-router-dom";
import './PageError.css';


function PageError(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <div id="errorPage">
            <Link className="page_error_itemLink" to="/">Go Back To Home</Link>
            </div>
        </div>
    );
}

export default PageError;