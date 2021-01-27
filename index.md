<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">


  </head>
  <body>
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- NAVIGATION BAR -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">David</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="#hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#my-portfolio">My Portfolio</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <!-- END OF NAVIGATION BAR -->

    <!-- HERO SECTION -->
    <section id="hero" class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light" style="font-size: 4em; font-weight: 600 !important;">David Vasquez</h1>
          <div id="sequence"></div>

        </div>
      </div>
    </section>

    <!-- END OF HERO SECTION -->

    <!-- START OF ABOUT SECTION -->
    <section class="py-5 text-center container" id="about">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light" style="font-size: 2.5em; font-weight: 600 !important;">A Little Bit About Myself</h1>
          <p class="lead text-muted" style="color: white !important;">I am a life-long student, in which I strive to learn something new each day. I work as a web developer, but am intrigued with other spectrums of IT outside of Web Development. I am currently studying Computer Science at Western Governors University.
          </p>
          <p class="lead text-muted" style="color: white !important;">Aside from coding, I love to play music, and do any outdoor activities. 
          </p>
          <p>
            <a href="https://github.com/dvasquezjr" class="btn btn-secondary" target="_blank">View GitHub</a>
            <a href="https://github.com/dvasquezjr/portfolio.git" class="btn btn-info" target="_blank">View Code for Website</a>
          </p>
        </div>
      </div>
    </section>

    <!-- END OF ABOUT SECTION -->

    <!-- START OF PORTFOLIO SECTION -->
    <section id="my-portfolio">

      <!-- PORTFOLIO TITLE -->
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light" style="font-size: 2.5em; font-weight: 600 !important; text-align: center;">My Portfolio</h1>
        </div>
      </div>

      <!-- PORTFOLIO PAGINATION -->
    <nav aria-label="Portfolio">
      <ul class="pagination pagination-lg justify-content-center">
        <li class="page-item"><a class="page-link" onclick="showAll()" href="#projects">All</a></li>
        <li class="page-item"><a class="page-link" onclick="showWebsites()" href="#projects">Websites</a></li>
        <li class="page-item"><a class="page-link" onclick="showApps()" href="#projects">Applications</a></li>
      </ul>
    </nav>
    <!-- END OF PORTFOLIO PAGINATION -->

    <!-- ALL OF PROJECTS -->
    <section id="projects">

          <!-- WEBSITE PROJECTS -->
    <div id="website-projects">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <!-- BORAL AGENCY -->
              <h5 class="card-title">Boral Agency</h5>
              <p class="card-text">This is my current employer's website. We have been updating the website recently, and currently finished optimizing the speed of the site.</p>
            </div>
            <div class="card-footer">
              <a href="https://www.boralagency.com/" class="btn btn-secondary" target="_blank">View Website</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <!-- UH -->
              <h5 class="card-title">UH College of Medicine</h5>
              <p class="card-text">During my time at Boral Agency, I had the opportunity to work on the website for the University of Houston - College of Medicine. In this project, I worked with the Cascade CMS, along with basic Web Development technologies such as HTML5, CSS3, and JavaScript.</p>
            </div>
            <div class="card-footer">
              <a href="https://www.uh.edu/medicine/" class="btn btn-secondary" target="_blank">View Website</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <!-- GIANT TEXAS -->
              <h5 class="card-title">Giant Texas</h5>
              <p class="card-text">In the summer of 2019, I contributed in the design and development of this website. This website was an extension of the Gulf Coast Distillery brand as a whole.</p>
            </div>
            <div class="card-footer">
              <a href="https://gianttexas.com/" class="btn btn-secondary" target="_blank">View Website</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">HCC Digital Academy</h5>
              <p class="card-text">At Boral Agency, we were given the task to create websites for 20+ small businesses in the Houston area. This was a template that I designed and created for Lupita's Roasted Corn.</p>
            </div>
            <div class="card-footer">
              <a href="http://hccdigital.flywheelsites.com/?page_id=267" class="btn btn-secondary" target="_blank">View Website</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Eli's Pressure Wash</h5>
              <p class="card-text">As a freelancer, I created a small website for a neighbor who was starting his own business. I designed, dveloped, and optimized the website using WordPress.</p>
            </div>
            <div class="card-footer">
              <a href="https://elispressurewash.com/" class="btn btn-secondary" target="_blank">View Website</a>            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">My Infinite CBD</h5>
              <p class="card-text">As a freelancer, I created a website for a local chef who wanted to sell cbd products. This project is still on-going, as I am currently adding e-commerce functionality to it.</p>
            </div>
            <div class="card-footer">
              <a href="https://myinfiniteproducts.shop/" class="btn btn-secondary" target="_blank">View Website</a>            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- END OF WEBSITE PROJECTS -->

    <!-- WEB APPLICATIONS -->
    <div id="web-apps">
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Simple To-Do List</h5>
        <p class="card-text">When I first started to learn the basics of JavaScript, I decided to create a simple to-do list. I did not add much styling, for I wanted to make sure I understood the functionality of the application.</p>
      </div>
      <div class="card-footer">
        <a href="https://dvasquezjr.github.io/simple-list/" class="btn btn-secondary" target="_blank">View App</a>
        <a href="https://github.com/dvasquezjr/simple-list.git" class="btn btn-info" target="_blank">View Code</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Clover Purchase Application</h5>
        <p class="card-text">I created this application to help a local church sell books. Due to COVID-19, they are not able to do transactions in person, so they asked if I can create a digital solution. I did not have a lot of time to create the app, so I used WordPress and WooCommerce.</p>
      </div>
      <div class="card-footer">
        <a href="https://galenapark.dto46iece.com/" class="btn btn-secondary" target="_blank">View App</a>
    </div>
  </div>
</div>
    </div>
    <!-- END OF WEB APPLICATIONS -->
    
    </section>
    <!-- END OF ALL PROJECTS -->





    
    <script src="" async defer></script>
    <script src="portfolio.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

      <script>
        var example = ['DEVELOPER', 'PROBLEM-SOLVER', 'LIFE LONG STUDENT', 'COMPUTER NERD'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 1000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }
    </script>
  </body>
</html>
