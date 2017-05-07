export default function Contact(){
    return (
        <div className="contact-form">
          <form action="//formspree.io/alex@alexpear.com" method="POST">
            <span className="ti ti-close mobile-only"></span>
            <h3>Contact Alex</h3>

            <label for="firstname">First Name:</label>
            <input type="text" name="firstname" placeholder="first name" required></input>
            <label for="lastname">Last Name:</label>
            <input type="text" name="lastname" placeholder="last name" required></input>
            <label for="sender">Your Email Address:</label>
            <input type="email" name="sender" placeholder="email@youraddress.com" required></input>
            <label for="subject">Message Subject:</label>
            <input type="text" name="subject" value="new message for Alex"></input>
            <label for="message">Message:</label>
            <textarea name="message" placeholder="Write your message here"></textarea>
            <div>
              <input type="submit" value="send message"></input>
              <button type="button" name="cancel" className="cancel">cancel</button>
            </div>
          </form>

            <div className="hidden">
                <h4>Thanks for the message!</h4>
                <p>I'll respond as soon as I can. Don't forget to also follow me on social media:</p>
                <ul>
                    <li><a href="//github.com/nalexpear" title="github"><span className="ti ti-github"></span></a></li>
                    <li><a href="//www.facebook.com/alex.pearson.568" title="facebook"><span className="ti ti-facebook"></span></a></li>
                    <li><a href="//www.linkedin.com/pub/alex-pearson/a4/492/a16" title="linkedin"><span className="ti ti-linkedin"></span></a></li>
                    <li><a href="//twitter.com/NAlexPearson" title="twitter"><span className="ti ti-twitter"></span></a></li>
                </ul>
            </div>
        </div>
    );
}
