import Move from "./animations";
import Mobile from "./mobile";

var move = new Move();
var mobile = new Mobile();

move.resume();
mobile.init( move );
