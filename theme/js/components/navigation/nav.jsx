/* eslint-disable no-unused-vars */
// Libraries
import { Link } from "inferno-router";

// Configuration
import routes from "config/routes.json";

function mapDefinition( definition ){
    var [ route, label ] = definition;

    return {
        "route": route,
        "label": label
    };
}

function MenuItem( props ){
    return (
        <li class="navreact">
            <Link to={props.route}>
                {props.label}
            </Link>
        </li>
    );
}

function NavBar(){
    return (
        <ul class="navbubbles">
            {
                Object
                    .entries( routes )
                    .map( mapDefinition )
                    .map( MenuItem )
            }
        </ul>
    );
}


export default NavBar;
