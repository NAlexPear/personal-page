/* eslint-disable no-unused-vars */
// Libraries
import { Link } from "inferno-router";

export default function About(){
    return (
        <div class="about-me">
            <h4>My name is Alex, and I build things.</h4>
            <p>Maybe not kitchen tables or log cabins (not yet, anyway), but you'll always find me building <i>something</i>. Those somethings that I'm most proud of have been made-from-scratch businesses, programs, and products. I take pride in creating organizations that are useful and meaningful (more on what that means later in <Link to="/blog">my blog</Link>).</p>
            <p>The desire to build things has taken me a lot of places. The need to build has lead me to create teaching opportunities for musicians and artists, help turn a student-run nightclub into a successful event space, create a place for unlikely athletes to meet their full potential, and build multiple programs for aspiring programs. </p>
            <p>That's the most important thing to know about me. Some other less important information:</p>
            <ul>
                <li>Born in Dallas, TX, raised in Cedar Rapids, IA, educated in Northfield, MN, former resident and life-long fan of Nashville, TN.</li>
                <li>I currently live in St. Louis with the girlfriend and a dog.</li>
                <li>I teach HTML, CSS, and JavaScript with <a href="//savvycoders.com">Savvy Coders</a></li>
                <li>I work as a freelance web developer and technology education consultant.</li>
                <li>I enjoy proper grammar and punctuation, and I'm a strong advocate for the Oxford comma.</li>
                <li>To hire me, pick my brain, or inform me of spelling errors in the blog, click the mail icons at the top or bottom of the page.</li>
            </ul>
            <p>
                Thanks once again for visiting. If you're here to marvel at my professional accomplishments, you can visit the résumé link above.
                If you'd like to see get a more personal view of my thoughts on building things, breaking things, or just being, check out <a href="/blog">my blog</a>.
            </p>
            <p>
            Cheers,
            -Alex
            </p>
        </div>
    );
}
