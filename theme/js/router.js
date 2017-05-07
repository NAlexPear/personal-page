// Libraries
import createHistory from "history/createBrowserHistory";
import { transform } from "lodash/fp";

// Pages
import Home from "pages/Home.jsx";
import About from "pages/About.jsx";
import Resume from "pages/CV.jsx";
import Contact from "pages/Contact.jsx";
import Projects from "pages/Projects.jsx";

// Configuration
import routes from "config/routes.json";

var history = createHistory();
var pages = { Home, About, Resume, Contact, Projects };
var actions;
var Router;


function getContent( route ){
    var content = actions[ route ];

    return content ? content() : "";
}

function transformRoutes( acc, { route, content } ){
    acc[ route ] = pages[ content ];
}


actions = transform(
    transformRoutes
)( {} )( routes );

Router = {
    init( updater = ( () => ( {} ) ) ){
        this.update( updater );

        this.update( location.pathname );

        this.clear = history.listen(
            ( { pathname } ) => this.update( pathname )
        );
    },
    getLocation(){
        return history.location.pathname;
    },
    navigate( route ){
        history.push( route );
    },
    update( updater ){
        this.update = ( route ) => updater( getContent( route ) );
    }
};

export default Router;
