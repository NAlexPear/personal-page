// Libraries
import Inferno from "inferno";

import { curry } from "lodash/fp";

// Components
import Router from "router";
import NavBar from "components/navigation/Nav.jsx";
import Content from "components/Content.jsx";

var container = document.getElementById( "app" );
var render = curry( Inferno.createRenderer() )( container );

function App( { children } ){
    return (
        <div>
            <NavBar/>
            <Content>{ children }</Content>
        </div>
    );
}

Router.init(
    ( content ) => render( <App>{ content }</App> )
);
