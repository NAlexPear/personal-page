/* eslint-disable new-cap, no-unused-vars */
// Libraries
import { Link } from "inferno-router";

// Lodash Modules
import {
    flow,
    map
} from "lodash/fp";

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
                flow(
                    map( mapDefinition ),
                    map( MenuItem )
                )( Object.entries( routes ) )
            }
        </ul>
    );
}


export default NavBar;
