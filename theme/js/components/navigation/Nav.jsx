/* eslint-disable no-unused-vars */
// Libraries
import Link from "components/navigation/Link.jsx";

// Configuration
import routes from "config/routes.json";

function filterHome( { route } ){
    return route.length > 1;
}

function getMenuItem( { route, label } ){
    var link = <Link to={route}>{ label }</Link>;

    if( route.match( /blog/ ) ){
        link = <a href={route}>{label}</a>;
    }
    
    return (
        <li className="navreact">
            { link };
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
