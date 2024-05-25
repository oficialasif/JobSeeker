<?php
session_start(); // Start the session
?>
<!DOCTYPE html>
<php lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />
  <title>Job Seeker</title>
  <link
      rel="shortcut icon"
      type="image/x-icon"
      href="assets/favicons/favicon-f0581bd1a86c7174b453f911d026ce43c2664385fd33e00fef7e1892ca6941df.ico"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-57x57-11025dba9f5bae30cd366cdae81bed0b15c8a8cde0fdf9062f058d63416ec751.png"
      sizes="57x57"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-72x72-3cf5d08eedec529ede86e5bd159716430342a42b959e366b8fe6a4bb04bf735b.png"
      sizes="72x72"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-76x76-27a81b9abb3806f9812a97eed4e1103f89e0998ce81bd3c7ff3c2c90b8869197.png"
      sizes="76x76"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-120x120-d7772bd23627f7d7baf679922485a9a42c0d78db20ce6f2e77a97f750686030c.png"
      sizes="120x120"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-144x144-e169c39299cdb3474f37e872138798e38d71a424dd0cad0ff2c445c42a3e3285.png"
      sizes="144x144"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-152x152-c933999892590f545949149ee98f1f047a4327715945885095c0bc55a3886400.png"
      sizes="152x152"
    />
    <link
      rel="apple-touch-icon-precomposed"
      type="image/x-icon"
      href="assets/favicons/apple-touch-icon-180x180-9ffc3b33318a5b822356ad971742049d2680cdcad2c5b6c7a33d66e648cccc15.png"
      sizes="180x180"
    />

    <link
      rel="preload"
      href="assets/open-sans-v15-latin-regular-8f2d48b503afd6ecfabf56945fa17025e41635205ab8d61eec59ee9fe2e3bb27.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="assets/open-sans-v15-latin-700-c0c0fa844b250582929608950749c8de57b507fe4cc8b3f559977cd389f8866c.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="assets/catamaran-v4-latin-regular-18c3e398faf5c30b22df55b6782246c3364ad00d9bb45af3b207b709acd34ae8.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="assets/catamaran-v4-latin-700-ad8cb0260c6e53eaec561dd7a115e5c29d898d52c015a77fc3df87fc7e5b15b9.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="assets/fontastic-f717eef58dc23836819530b0d573a0ace33c6a12e62ecaf952e43c5cacf866e2.woff"
      as="font"
      type="font/woff"
      crossorigin="anonymous"
    />
    <link
      rel="preload"
      href="assets/bootstrap/glyphicons-halflings-regular-403acfcf0cbaebd1c28b404eec442cea53642644b3a73f91c5a4ab46859af772.woff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      media="all"
      href="assets/application-b41aafc11aa825400d3dba101367275a5b29115a00cb5bd4dd60ef2580b98047.css"
    />

    <script>
      window.config = {
        ENV: "production",
        STAFF: false,
      };
    </script>
    <script>
      window.config.GOOGLE_ANALYTICS = "UA-32007713-1";
      window.config.HJ = "75886";
    </script>
    <script type="text/javascript">
      (window.heap = window.heap || []),
        (heap.load = function (e, t) {
          (window.heap.appid = e), (window.heap.config = t = t || {});
          var r = t.forceSSL || "https:" === document.location.protocol,
            a = document.createElement("script");
          (a.type = "text/javascript"),
            (a.async = !0),
            (a.src =
              (r ? "https:" : "http:") +
              "//cdn.heapanalytics.com/js/heap-" +
              e +
              ".js");
          var n = document.getElementsByTagName("script")[0];
          n.parentNode.insertBefore(a, n);
          for (
            var o = function (e) {
                return function () {
                  heap.push(
                    [e].concat(Array.prototype.slice.call(arguments, 0))
                  );
                };
              },
              p = [
                "addEventProperties",
                "addUserProperties",
                "clearEventProperties",
                "identify",
                "removeEventProperty",
                "setEventProperties",
                "track",
                "unsetEventProperty",
              ],
              c = 0;
            c < p.length;
            c++
          )
            heap[p[c]] = o(p[c]);
        });
      heap.load("2675996080");
    </script>
</head>
<body>

  <body class="body-home index body-expanded">
    <div class="main-content" id="main-content">
      <div class="">
        <div class="flash-container" id="flash-container"></div>

        <article>
          <section
            class="cover"
            style="
              background-image: url(assets/ff.jpg);
          >
            <nav class="navbar navbar-default">
              <div class="container">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    id="side-menu-toggle"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar top"></span>
                    <span class="icon-bar mid"></span>
                    <span class="icon-bar btm"></span>
                  </button>
                  <a class="navbar-brand visible-xs-block" href="index.html"
                    ><img
                      alt="jobseeker"
                      src="assets/homelogo.png"
                  /></a>
                </div>

                <div class="collapse navbar-collapse">
                  <ul class="nav navbar-right navbar-nav">

                  <?php if (isset($_SESSION['username'])): ?>
                    <li><a href="profile.php">Profile</a></li>
                    <li><a href="logout.php">Logout</a></li>
                <?php else: ?>
                    <li><a href="loginpage.php">Login</a></li>
                    <li><a href="register.php">Signup</a></li>
                <?php endif; ?>
                 
                  <!-- <?php if (!isset($_SESSION['username'])): ?>  
            <li><a href="loginpage.php">Login</a></li> 
            <li><a href="register.php">Signup</a></li> 
        <?php else: ?>
            <li><a href="home.php">Profile</a></li>
            <li><a href="register.php">Logout</a></li>
        <?php endif; ?> -->


                    <li class="dropdown locales">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Job find & post
                      <ul class="dropdown-menu">

                      
                        <li><a href="find-jobs.php">Find Jobs</a></li>
                        <li>
                          <a
                            target="_blank"
                            href="index.php"
                            >Post a job</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li><a target="_blank" href="https://www.instagram.com/oficial_asif_?igsh=MW82NHY2a2JxMjJpMw==">Blog</a></li>
                    <li class="dropdown locales">
                      <a
                        data-toggle="dropdown"
                        class="dropdown-toggle"
                        href="#"
                      >
                        English
                        <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#"
                            >Bangla</a
                          >
                        </li>
                      </ul>
                       
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div class="text-center cover-content">
              <div class="visible-sm-block visible-md-block visible-lg-block">
                <a class="home-logo" href="index.html">
                  <img
                    alt="jobseeker"
                   
                    src="assets/homelogo1.png"
                  />
                </a>
              </div>

              <h1 class="cover-title">LET'S FIND YOUR DREAM JOB</h1>
              <h2 class="cover-subtitle font-lighter">
                Search,find,apply & work.
              </h2>

              <div class="location-links">
                <a
                  class="btn-round-pill btn-round-pill-fixed"
                  href="jobs-dhaka.html"
                  >Dhaka</a
                >
                <a
                  class="btn-round-pill btn-round-pill-fixed"
                  href="jobs-rajshahi.html"
                  >Rajshahi</a
                >
                <a
                  class="btn-round-pill btn-round-pill-fixed"
                  href="jobs-sylhet.html"
                  >Sylhet</a
                >
                <a
                  class="btn-round-pill btn-round-pill-fixed"
                  href="jobs-remote.html"
                  >Remote</a
                >
              </div>
            </div>
          </section>

          <section class="container text-center">
            <h3 class="section-title">
              About Job Seeker-Find Dreams
            </h3>

            <div class="row">
              <div class="col-md-10 col-md-offset-1 col-sm-12">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="m-b-30">
                      <div class="img-wrp-md fit-img">
                        <img
                          alt="jobseeker Job Recommendations &amp; Search"
                          
                          src="assets/p1.jpg"
                        />
                      </div>
                    </div>
                    <h4 class="m-b-30 subsection-title">
                     Job Recommendations &amp; Search
                    </h4>
                    <div class="text-muted font-13">
                    At Job Seeker, we utilize advanced algorithms to curate personalized job recommendations based on your qualifications, experience, and preferences. Our platform analyzes your profile and job history to match you with opportunities that align with your skill set and career goals. Say goodbye to endless job searching and let us streamline the process for you.
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="m-b-30">
                      <div class="img-wrp-md fit-img">
                        <img
                          alt="jobseeker Company Insights & Culture Fit"
                          
                          src="assets/p2.jpg"
                        />
                      </div>
                    </div>
                    <h4 class="m-b-30 subsection-title">Company Insights & Culture Fit</h4>
                    <div class="text-muted font-13">
                    Beyond just job listings, Job Seeker provides valuable insights into company culture and values. We understand that finding the right fit goes beyond technical skills, which is why we offer detailed company profiles highlighting employee experiences, diversity initiatives, and workplace environment. Make informed decisions about your next career move by understanding the ethos of the companies you're considering.
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="m-b-30">
                      <div class="img-wrp-md fit-img">
                        <img
                          alt="jobseeker Community Support & Networking"
                          
                          src="assets/p3.jpg"
                        />
                      </div>
                    </div>
                    <h4 class="m-b-30 subsection-title">
                      Community Support & Networking
                    </h4>
                    <div class="text-muted font-13">
                    Join a vibrant community of like-minded professionals on Job Seeker. Connect with fellow engineers, share industry insights, and tap into valuable networking opportunities. Whether you're seeking mentorship, collaboration, or simply want to expand your professional circle, our platform fosters a supportive environment for engineers to thrive. Access exclusive events, forums, and resources tailored to your career growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <a href="#" class="scroll-top">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
      </div>

      <footer class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6">
              <a class="brand" href="index.html">
                <img
                  alt="jobseeker"
                  
                  src="assets/footerlogo.jpg"
                />
              </a>
              <div class="m-t-10">
                2024 &copy; Job Seeker. All over Bangladesh.
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="row footer-links">
                <div class="col-sm-4">
                  <ul class="list-unstyled">
                    <li><a href="jobseeker/home.php">Jobs</a></li>
                    <li><a href="companies.html">Companies</a></li>
                    <li><a href="https://www.instagram.com/oficial_asif">Employer's portfolio</a></li>
                    <li><a href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z">Maps</a></li>
                    <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100064195095874&mibextid=ZbWKwL">Contact for Help</a></li>
                    <li><a href="https://www.facebook.com/OficialAsif">About</a></li>
                  </ul>
                </div>
                <div class="col-sm-8">
                  <ul class="list-unstyled">
                    <li><a href="terms.html">Terms of Use</a></li>
                    <li><a href="legal.html">Legal Notice</a></li>
                    <li>
                      <a href="privacy.html">Privacy Policy &amp; Cookies</a>
                    </li>
                    <li class="dropdown locales">
                      <a
                        data-toggle="dropdown"
                        class="dropdown-toggle"
                        href="#"
                      >
                        English
                        <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            href="#"
                            >Bangla</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="social-links m-t-20">
                <a
                  class="icon-linkedin"
                  href="https://www.linkedin.com/company/jobseeker"
                ></a>
                <a
                  class="icon-twitter"
                  href="https://twitter.com/jobseeker"
                ></a>
                <a
                  class="icon-facebook"
                  href="https://www.facebook.com/jobseeker"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <div id="side-menu">
      <div class="side-menu">
        <ul class="nav navbar-right navbar-nav">
          <li class="active">
            <a href="#">Jobs</a>
          </li>
          <li>
            <a id="header-link-companies" href="#"
              >Companies</a
            >
          </li>
          <li class="dropdown locales">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
            Employer's portfolio
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="find-jobs.php">Find jobs</a></li>
              <li>
                <a
                  target="_blank"
                  href="add-new"
                  >Post a job</a
                >
              </li>
            </ul>
          </li>
          <li class="dropdown locales">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              English
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  href="#"
                  >Bangla</a
                >
              </li>
            </ul>
          </li>
        </ul>

        <ul class="nav navbar-nav">
          <li>
            <a target="_blank" href="https://www.instagram.com">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li class="social-links">
            <a
              class="icon-linkedin"
              href="https://www.linkedin.com/company/jobseekr"
            ></a>
            <a class="icon-twitter" href="https://twitter.com/jobseekr"></a>
            <a
              class="icon-facebook"
              href="https://www.facebook.com/jobseekr"
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="modal"
      id="offer-application-modal"
      tabindex="-1"
      role="dialog"
    ></div>
    <div
      class="modal fade"
      id="offer-subscription-modal"
      tabindex="-1"
      role="dialog"
    ></div>

    <div
      id="cookies"
      class="alert alert-warning alert-dismissible alert-cookies"
      role="alert"
    >
      <span class="glyphicon glyphicon-info-sign"></span>
      We use our own cookies and cookies from third parties to measure your
      activity in this website and improve the service through analysis of your
      browsing activity. If you continue browsing, we consider that you accept
      their use. You can change this configuration and obtain more information
      <a href="privacy.html">here</a>.

      <button id="accept-cookies" class="btn btn-success btn-sm m-l-5">
        I understand
      </button>
    </div>

    <script src="assets/application-781237d65639fdff3fb4dcf03c8055fde2ee5a32d5f473849ecf02e69de5e3f9.js"></script>
    <script>
      $(function () {
        jobsBCN.sideMenu();
      });
    </script>
    <script>
      $(function () {
        jobsBCN.scrollTop();
        retinajs();
      });
    </script>
  </body>
</html>
