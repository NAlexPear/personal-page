const JOBS = [
    {
        "display": "Front-End Team Lead, Five-Star Technology Solutions",
        "blurb": "Worked up from a position as a Principal Software Dev to Senior Developer and Team Lead for the Front-End team in charge of Pivot, one of the nation's largest K-12 student performance tracking applications. Serving hundreds of thousands of students across the country, lead a team through a complete redesign of legacy PHP pages, re-writing them into an enterprise-grade Slim + Backbone.js application."
    },
    {
        "display": "JavaScript Instructor, Savvy Coders",
        "blurb": "In partnership with renowned bootcamp Hack Reactor, built an intro to programming in HTML, CSS, and JavaScript. Classes launched in Nashville in late 2015. For more details, see the <a href=\"//savvycoders.com\">Savvy Coders website</a>"
    },
    {
        "display": "Freelance Web Developer",
        "blurb": "Custom websites built using HTML, CSS, and JavaScript, optimized for the modern web."
    },
    {
        "display": "Technology Education Consultant",
        "blurb": "Helped bootcamps across the country revitalize their online and in-person curriculum as a consultant."
    },
    {
        "display": "Director of Curriculum, Claim Academy",
        "blurb": "Built St. Louis's first developer bootcamp from the ground up. First class began 4 months after being hired, first Java developers graduated 7 months after joining the team, and all graduates connected to St. Louis technology jobs."
    }
];

function Job( props ){
    return (
        <li>
            <span class="ti ti-location-arrow"></span>{ props.display }
            <div>
                <p>{ props.blurb }</p>
            </div>
        </li>
    );
}

export default function CV(){
    return (
        <div class="resume-info">
            <div>
                <div class="resume-drop">
                <p class="resume-title">Click on a position to learn more</p>
                    <ul>
                        { JOBS.map( Job ) }
                    </ul>
                </div>
            </div>
        </div>
    );
}
