/* eslint-disable no-unused-vars */
// Components
import Link from "components/navigation/Link.jsx";

export default function Homepage(){
    return (
        <div className="introduction">
          <h3>Hi there.</h3>
          <p>Welcome to my personal web page. I maintain this site as a way of gathering together all of those things that others might find interesting about what I do and who I am. </p>
          <p>I hope you find it useful, enlightening, or entertaining.</p>
          <p>Click on the <Link to="/about">about me</Link> link to find out more. Thanks for visiting.</p>
          <div className="signature">
              <img src="theme/images/APlogo3.svg"></img>
              <h1>-Alex</h1>
          </div>
        </div>
    );
}
