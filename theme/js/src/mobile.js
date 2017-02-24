/* globals move */
/* eslint-disable new-cap */

( function iife( window, document, move ){
  // navigation menu options, slide in from the left
    var nav = document.getElementById( "mobile-nav" );
    var mobileIcon = nav.querySelector( ".ti-menu" );
    var mobileMenu = document.getElementById( "menubar" );

    var contact = nav.querySelector( ".ti-email" );
    var overlay = document.getElementById( "mobile-contact-overlay" );
    var exit = overlay.querySelector( ".ti-close" );
    var cancel = overlay.querySelector( "button.cancel" );

    mobileIcon.addEventListener( "click", () => {
        if( mobileMenu.className.match( "expanded" ) ){
            move.menu.close( mobileMenu, mobileIcon );
        }
        else{
            move.menu.open( mobileMenu, mobileIcon );
        }
    } );

    mobileMenu.addEventListener( "click", ( e ) => {
        if( e.target ){
            if( mobileMenu.className.match( "expanded" ) ){
                move.menu.close( mobileMenu, mobileIcon );
            }
        }
    } );

  // contact form options, appearing as full screen overlay
    contact.addEventListener( "click", () => {
        overlay.className = overlay.className.replace( "hidden", "" );
    } );
    exit.addEventListener( "click", () => {
        overlay.className += " hidden";
    } );
    cancel.addEventListener( "click", () => {
        overlay.className += " hidden";
    } );
}( window, document, move() ) );
