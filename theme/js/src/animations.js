import T from "gsap/TweenLite.js";

export default function Move(){
  // open/close side menu on mobile
    this.menu = {
        close( menu, icon ){
            T.to( menu, 0.2, { "left": "-400px" } );
            menu.className = menu.className.replace( " expanded","" );
            icon.className = icon.className.replace( "ti-close", "ti-menu" );
        },
        open( menu, icon ){
            T.to( menu, 0.2, { "left": "0px" } );
            menu.className += " expanded";
            icon.className = icon.className.replace( "ti-menu", "ti-close" );
        }
    };

    this.resume = function resumeDropdown(){
        var p = document.querySelector( ".resume-drop" );
        var ul = p.querySelector( "ul" );

        function getChildren( n, skip ){
            var r = [];

            for( ; n; n = n.nextSibling ){
                if( n.nodeType == 1 && n != skip ){
                    r.push( n );
                }
            }

            return r;
        }

        function getSiblings( n ){
            return getChildren( n.parentNode.firstChild, n );
        }

        /* eslint-disable complexity */
        ul.addEventListener( "click", ( e ) => {
            var li = e.target;
            var blurb;
            var otherLi;

            function removeClasses(){
                blurb.className = blurb.className.replace( "expanded","" );
                li.className = li.className.replace( "active","" );
            }

            function addClasses(){
                blurb.className += " expanded";
                li.className += " active";
            }


            if( li && li.nodeName === "LI" ){
                blurb = li.childNodes[2];
                otherLi = getSiblings( li );

                if( blurb.className.match( /expanded/ ) ){
                    removeClasses();
                    T.to( blurb, 0.2, { "height": "0" } );
                }
                else{
                    addClasses();

                    T.to( blurb, 0.2, { "height": "7em" } );

                    for( let i = 0; i < otherLi.length; i++ ){
                        if( otherLi[i].className ){
                            let otherBlurb = otherLi[i].childNodes[2];

                            otherLi[i].className = otherLi[i].className.replace( "active","" );
                            otherBlurb.className = otherBlurb.className.replace( "expanded","" );

                            T.to( otherBlurb, 0.2, { "height": "0" } );
                        }
                    }
                }
            }
        } );
    };
}
