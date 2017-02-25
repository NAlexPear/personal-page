// Libraries
/* eslint-disable no-unused-vars */
import Inferno from "inferno";
import { Router, Route, IndexRoute } from "inferno-router";
import { createBrowserHistory } from "history";

var browserHistory = createBrowserHistory();

var routes;

function App(){
    /* eslint-disable no-console */
    console.log( "App is running!" );
}

function Homepage(){

}

function About(){

}

function Resume(){

}

function Contact(){

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
    document.getElementById( "content" )
);
