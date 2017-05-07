import router from "router";

function clickHandler( event ){
    event.preventDefault();

    router.navigate( this.to );
}

export default function Link( { children, to } ){
    return (
        <a href={ to } onClick={ clickHandler.bind( { to } ) }>
            {children}
        </a>
    );
}
