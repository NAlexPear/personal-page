/* eslint-disable no-unused-vars, new-cap */

// Libraries
import Inferno from "inferno";
import { Router, Route, IndexRoute } from "inferno-router";
import { createBrowserHistory } from "history";

// Components
import NavBar from "./components/navigation/nav.jsx";

// Pages
import Homepage from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/CV.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";


var browserHistory = createBrowserHistory();

var routes;

function Wrapper( children = null ){
    return (
        <div id="page-wrap">
            <div id="content-wrapper">
                <div id="content">
                    { children || null }
                </div>
            </div>
        </div>
    );
}

function App( { children } ){
    return (
        <div>
            { NavBar() }
            { Wrapper( children ) }
        </div>
    );
}

routes = (
    <Router history={ browserHistory }>
        <Route component={ App }>
              <IndexRoute component={ Homepage }/>
              <Route path="/about" component={ About }/>
              <Route path="/resume" component={ Resume }/>
              <Route path="/contact" component={ Contact }/>
              <Route path="/projects" component={ Projects }/>
        </Route>
    </Router>
);

Inferno.render(
    routes,
    document.getElementById( "app" )
);
