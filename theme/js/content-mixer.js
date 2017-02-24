( function iife( window, document ){
    var navBubbles = document.querySelectorAll( ".navbubbles" );
    var contactTarget = document.querySelectorAll( ".contact-target" );
    var targets = [];

    var content = document.getElementById( "content" );
    var children = content.childNodes;


    var url = window.location.href;

    function targetify(){
        for( let i = 0; i < arguments.length; i++ ){
            let args = arguments[i];

            for( let j = 0; j < args.length; j++ ){
                targets.push( args[i] );
            }
        }
    }

    /* eslint-disable complexity */
    function mixer( targetClass ){
        if( targetClass !== undefined ){
            for( let i = 0; i < children.length; i++ ){
                let el = children[i];

                if( el.className && el.className.match( targetClass ) ){
                    el.className = el.className.replaceAll( "hidden", "" );
                }
                else if( el.className && el.className.match( /hidden/ ) ){
                    el.className = el.className;
                }
                else if( el.className ){
                    el.className += " hidden";
                }
            }
        }
    }

// mix content according to URL on page load (if applicable)
    let targetClass = url.split( "?" )[1];

    mixer( targetClass );

// set up targets array
    targetify( navBubbles, contactTarget );
    targets.push( document.getElementById( "menubar" ) );

// mix content when menu items are clicked on the front page
    for( let i = 0; i < targets.length; i++ ){
        targets[i].addEventListener( "click", ( e ) => {
            var classSection = e.target.parentNode.getAttribute( "data-action" );

            if( classSection !== "blog-link" ){
      // event.preventDefault();
                mixer( classSection );
            }
        } );
    }

    String.prototype.replaceAll = function replaceAll( search, replace ){
        if( replace === undefined ){
            return this.toString();
        }

        return this.split( search ).join( replace );
    };
}( window, document ) );
