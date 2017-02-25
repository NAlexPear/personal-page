/* eslint-disable no-unused-vars, new-cap */

// Libraries
import Inferno from "inferno";
import { Router, Route, IndexRoute } from "inferno-router";
import { createBrowserHistory } from "history";

// Components
import NavBar from "./components/navigation/nav.jsx";


var browserHistory = createBrowserHistory();

var routes;

function App( { children } ){
    /* eslint-disable no-console */
    console.log( "App is running!" );
    console.log( "children?", children );

    return <div>{ NavBar() }</div>;
}

function Homepage(){
    console.log( "Hompage!" );
}

function About(){
    console.log( "About!" );
}

function Resume(){
    console.log( "Resume!" );
}

function Contact(){
    console.log( "Contact Me!" );
}

routes = (
    <Router history={ browserHistory }>
        <Route component={ App }>
              <IndexRoute component={ Homepage }/>
              <Route path="/about" component={ About }/>
              <Route path="/resume" component={ Resume }/>
              <Route path="/contact" component={ Contact }/>
        </Route>
    </Router>
);

Inferno.render(
    routes,
    document.getElementById( "app" )
);
