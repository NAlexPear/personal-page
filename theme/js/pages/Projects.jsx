export default function Projects(){
    return (
        <div className="preview-portfolio">
          <h4>Web Projects</h4>
          <p className="subtitle center">
            (click images for more info)
          </p>

          <div className="portfolio-display">
            <div id="savvy">
              <picture>
                <img src="theme/images/savvy.png" alt="Savvy Coders"></img>
              </picture>
              <p className="subtitle">Savvy Coders</p>

              <div className="portfolio-description">
                <h4 className="title">Savvy Coders</h4>
                <p>
                  <a href="https://savvycoders.com">Savvy Coders</a> is a 4-week bootcamp that teaches programming beginners the basics of HTML, CSS, and JavaScript. Besides assitance with curriculum, classroom materials, and in-person instruction, Savvy Coders also needed a website that was responsive, clear, and fast.
                </p>


                <h4>Technical Specs</h4>
                <ul className="specs">
                  <li>Built-from-scratch theme and user experience</li>
                  <li>Fully customized static HTML, CSS, and JavaScript assets</li>
                  <li>Mobile responsiveness built using SASS, jQuery, and vanilla JavaScript</li>
                  <li>Secured and distributed via CDN</li>
                  <li>Custom browser caching and selective GZip serving through .htaccess optimization</li>
                  <li>Dependency management through bower (front-end) and npm (gulp + developer environment)</li>
                  <li>Large-image handling for multiple devices using <a href="https://scottjehl.github.io/picturefill/">Picturefill</a></li>
                  <li>Page Speed Optimizations (through Gulp)
                    <ul>
                      <li>GZip compression of static assets</li>
                      <li>Image compression on all .jpg, .png, and .svg files</li>
                      <li>Concatenation and Uglification of JavaScript files</li>
                      <li>Concatenation and minification of CSS stylesheets</li>
                      <li>Automatic in-lining of critical, above-the-fold CSS (using the <a href="https://www.npmjs.com/package/critical">'critical' npm module</a>)</li>
                      <li>HTML minification</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div id="claim">
              <picture>
                <img src="theme/images/claim.png" alt="Claim Academy"></img>
              </picture>
              <p className="subtitle">Claim Academy</p>

              <div className="portfolio-description">
                <h4 className="title">Claim Academy</h4>
                <p>
                  <a href="//claimacademystl.com">Claim Academy</a> is St. Louis's first developer bootcamp, teaching Java and C# through 12-week, in-person courses. Claim needed a website that clearly demonstrated the value proposition, while cleanly integrating with multi-platform marketing efforts. Critical integrations included effective guidance towards Typeform applications for prospective students, basic calendar and event presentation, and a blog updated weekly.
                </p>

                <h4>Technical Specs</h4>
                <ul className="specs">
                  <li>Logos and color schemes integrated according to designer specs.</li>
                  <li>Custom-built user experience</li>
                  <li>Fully customized HTML and CSS assets</li>
                  <li>Responsive design built upon <a href="https://github.com/n33/skel">Skel</a>, a JS and SASS-based framework for multi-device compatibility</li>
                  <li>Blog built using <a href="https://jekyllrb.com/">Jekyll</a>, a Ruby-based static site builder designed for markdown-based blog posts</li>
                </ul>
              </div>
            </div>
            <div id="alexpear">
              <picture>
                <img src="theme/images/blog.png" alt="Alex's Blog"></img>
              </picture>
              <p className="subtitle">alexpear.com</p>

              <div className="portfolio-description">
                <h4 className="title">alexpear.com</h4>
                <p>
                  This website is built for personal use as a combination of portfolio, blog, and platform for experimentation. I try out most technologies on this site first before implementing them elsewhere.Feel free to <a href="https://github.com/NAlexPear/personal-page">take a look at the source code</a> on my GitHub account.
                </p>


                <h4>Technical Specs</h4>
                <ul className="specs">
                  <li>Built-from-scratch theme and user experience</li>
                  <li>Fully customized static HTML, CSS, and JavaScript assets</li>
                  <li>Mobile responsiveness built using SASS, jQuery, and vanilla JavaScript</li>
                  <li>Secured and distributed via CDN</li>
                  <li>Custom browser caching and selective GZip serving through .htaccess optimization</li>
                  <li>Dependency management through bower (front-end) and npm (gulp + developer environment)</li>
                  <li>Blog contents built using <a href="https://jekyllrb.com/">Jekyll</a>, a Ruby-based static site builder designed for markdown-based blog posts. For more information, see my blog posts (found <a href="http://alexpear.com/blog/2014/12/03/blog-tech-1/">here</a> and <a href="http://alexpear.com/blog/2015/05/04/blog-tech-2/">here</a>) about building Jekyll blogs in a static sub-directory on this site.</li>
                  <li>Large-image handling for multiple devices using <a href="https://scottjehl.github.io/picturefill/">Picturefill</a></li>
                  <li>Page Speed Optimizations (through Gulp)
                    <ul>
                      <li>Automatic Jekyll processing through the child_process npm module</li>
                      <li>GZip compression of static assets</li>
                      <li>Image compression on all .jpg, .png, and .svg files</li>
                      <li>Concatenation and Uglification of JavaScript files</li>
                      <li>Autoprefixing through the gulp-postcss and autoprefixer modules</li>
                    </ul>
                  </li>
                  <li><b><a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Falexpear.com&tab=mobile">Current PageSpeed Insights Scores</a>:</b>
                    <ul>
                      <li><b>mobile: </b>91/100</li>
                      <li><b>desktop: </b>97/100</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="gh-projects">
            <h4>other projects on GitHub</h4>
            <ul>
              <li>
                <p><a href="https://github.com/NAlexPear/blog-runner"><span>Blog Runner: </span>
                </a>
                a lightweight JavaScript static site generator for use with a Node-based build process. See it in action on this blog and packaged as an npm module
                 <a href="https://www.npmjs.com/package/blog-runner">here</a>.</p>
              </li>
              <li>
                <p><a href="https://github.com/NAlexPear/squeezebox-portfolio-template"><span>Squeezebox Redux: </span>
                </a>
                an overhaul of CodyHouse's squeezebox portfolio template for desktop implementations and performance boosts. See the project demo <a href="https://squeezebox-redux-demo.firebaseapp.com/">here</a>.</p>
              </li>
              <li>
                <p>
                  <a href="https://github.com/NAlexPear/css-inliner-online"><span>CSS Inliner Online: </span></a>an online tool for inlining styles from CSS in external websites, built using node.js (work in progress).
                </p>
              </li>
            </ul>
          </div>
        </div>
    );
}
