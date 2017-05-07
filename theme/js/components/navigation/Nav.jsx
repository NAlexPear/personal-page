/* eslint-disable no-unused-vars */
// Libraries
import Link from "components/navigation/Link.jsx";

// Configuration
import routes from "config/routes.json";

function filterHome( { route } ){
    return route.length > 1;
}

function getMenuItem( { route, label } ){
    return (
        <li className="navreact">
            <Link to={route}>{ label }</Link>
        </li>
    );
}

function NavBar(){
    return (
        <ul className="navbubbles">
            { routes.filter( filterHome ).map( getMenuItem ) }
        </ul>
    );
}


export default NavBar;
