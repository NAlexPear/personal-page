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

var actions = transform(
    ( acc, { route, content } ) => acc[ route ] = pages[ content ]
)( {} )( routes );

var Router = {
    init( updater = ( () => ( {} ) ) ){
        this.update = updater;

        this.clear = history.listen(
            ( location, action ) => {
                if( action === "POP" ){
                    this.update( this.getContent( location.pathname ) );
                }
            }
        );

        this.navigate( "/" );
    },
    getLocation(){
        return history.location.pathname;
    },
    navigate( route ){
        history.push( route );

        this.update( this.getContent( route ) );
    },
    getContent( route ){
        return actions[ route ]();
    }
};

export default Router;
