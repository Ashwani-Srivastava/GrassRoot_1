import { Component, h } from '@stencil/core';
/* import { format } from '../../utils/utils'; */
@Component({
  tag: 'my-component',
  /* styleUrl: 'my-component.css', */
  /* shadow: true, */
})
export class MyComponent {
  
  render() {
    return (<div>
      
{/* <!-- PRE LOADER --> */}

<div class="preloader">
     <div class="sk-spinner sk-spinner-wordpress">
          <span class="sk-inner-circle"></span>
     </div>
</div>

{/* <!-- Navigation section  --> */}

<div class="navbar navbar-default navbar-static-top" role="navigation">
     <div class="container">

          <div class="navbar-header">
               <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
               </button>
               <a href="index.html" class="navbar-brand">Neuron</a>
          </div>
          <div class="collapse navbar-collapse">
               <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
               </ul>
          </div>

  </div>
</div>

{/* <!-- Home Section --> */}

<section id="home" class="main-home parallax-section">
     <div class="overlay"></div>
     <div id="particles-js"></div>
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
                    <h1>Hello! This is Neuron.</h1>
                    <h4>Responsive Blog HTML CSS Website Template</h4>
                    <a href="#blog" class="smoothScroll btn btn-default">Discover More</a>
               </div>

          </div>
     </div>
</section>

{/* <!-- Blog Section --> */}

<section id="blog">
     <div class="container">
          <div class="row">

               <div class="col-md-offset-1 col-md-10 col-sm-12">
                    <div class="blog-post-thumb">
                         <div class="blog-post-image">
                              <a href="single-post.html">
                                   <img src="assets/images/blog-image1.jpg" class="img-responsive" alt="Blog Image"/>
                              </a>
                         </div>
                         <div class="blog-post-title">
                              <h3><a href="single-post.html">We Help You Create Perfect Modern Design</a></h3>
                         </div>
                         <div class="blog-post-format">
                              <span><a href="#"><img src="assets/images/author-image1.jpg" class="img-responsive img-circle"/> Jen Lopez</a></span>
                              <span><i class="fa fa-date"></i> July 22, 2017</span>
                              <span><a href="#"><i class="fa fa-comment-o"></i> 35 Comments</a></span>
                         </div>
                         <div class="blog-post-des">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <a href="single-post.html" class="btn btn-default">Continue Reading</a>
                         </div>
                    </div>

                    <div class="blog-post-thumb">
                         <div class="blog-post-image">
                              <a href="single-post.html">
                                   <img src="assets/images/blog-image2.jpg" class="img-responsive" alt="Blog Image"/>
                              </a>
                         </div>
                         <div class="blog-post-title">
                              <h3><a href="single-post.html">In pretium tellus et ante accumsan</a></h3>
                         </div>
                         <div class="blog-post-format">
                              <span><a href="#"><img src="assets/images/author-image2.jpg" class="img-responsive img-circle"/> Leo Dennis</a></span>
                              <span><i class="fa fa-date"></i> June 10, 2017</span>
                              <span><a href="#"><i class="fa fa-comment-o"></i> 48 Comments</a></span>
                         </div>
                         <div class="blog-post-des">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <a href="single-post.html" class="btn btn-default">Continue Reading</a>
                         </div>
                    </div>

                    <div class="blog-post-thumb">
                         <div class="blog-post-video">
                              <div class="embed-responsive embed-responsive-16by9">
                                  {/*  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Pgmx7z49OEk" allowFullScreen></iframe> */}
                              </div>
                         </div>
                         <div class="blog-post-title">
                              <h3><a href="single-post.html">Nam interdum maximus dolor faucibus</a></h3>
                         </div>
                         <div class="blog-post-format">
                              <span><a href="#"><img src="assets/images/author-image1.jpg" class="img-responsive img-circle"/> Jen Lopez</a></span>
                              <span><i class="fa fa-date"></i> May 30, 2017</span>
                              <span><a href="#"><i class="fa fa-comment-o"></i> 63 Comments</a></span>
                         </div>
                         <div class="blog-post-des">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <a href="single-post.html" class="btn btn-default">Continue Reading</a>
                         </div>
                    </div>

                    <div class="blog-post-thumb">
                         <div class="blog-post-image">
                              <a href="single-post.html">
                                   <img src="assets/images/blog-image3.jpg" class="img-responsive" alt="Blog Image"/>
                              </a>
                         </div>
                         <div class="blog-post-title">
                              <h3><a href="single-post.html">The ingredients that make a great burger</a></h3>
                         </div>
                         <div class="blog-post-format">
                              <span><a href="#"><img src="assets/images/author-image2.jpg" class="img-responsive img-circle"/> Leo Dennis</a></span>
                              <span><i class="fa fa-date"></i> April 18, 2017</span>
                              <span><a href="#"><i class="fa fa-comment-o"></i> 124 Comments</a></span>
                         </div>
                         <div class="blog-post-des">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <a href="single-post.html" class="btn btn-default">Continue Reading</a>
                         </div>
                    </div>

                    <div class="blog-post-thumb">
                         <div class="blog-post-image">
                              <a href="single-post.html">
                                   <img src="assets/images/blog-image4.jpg" class="img-responsive" alt="Blog Image"/>
                              </a>
                         </div>
                         <div class="blog-post-title">
                              <h3><a href="single-post.html">Vestibulum vel mauris nec ex tempus</a></h3>
                         </div>
                         <div class="blog-post-format">
                              <span><a href="#"><img src="assets/images/author-image1.jpg" class="img-responsive img-circle"/> Jen Lopez</a></span>
                              <span><i class="fa fa-date"></i> March 12, 2017</span>
                              <span><a href="#"><i class="fa fa-comment-o"></i> 256 Comments</a></span>
                         </div>
                         <div class="blog-post-des">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <a href="single-post.html" class="btn btn-default">Continue Reading</a>
                         </div>
                    </div>
               </div>

          </div>
     </div>
</section>

{/* <!-- Footer Section --> */}

<footer>
     <div class="container">
          <div class="row">

               <div class="col-md-5 col-md-offset-1 col-sm-6">
                    <h3>Neuron Studio</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div class="footer-copyright">
                         <p>Copyright &copy; 2017 Your Company - Design: Tooplate</p>
                    </div>
               </div>

               <div class="col-md-4 col-md-offset-1 col-sm-6">
                    <h3>Talk to us</h3>
                    <p><i class="fa fa-globe"></i> 512 Delicious Street, San Francisco, CA 10880</p>
                    <p><i class="fa fa-phone"></i> 010-020-0990</p>
                    <p><i class="fa fa-save"></i> info@company.com</p>
               </div>

               <div class="clearfix col-md-12 col-sm-12">
                    <hr/>
               </div>

               <div class="col-md-12 col-sm-12">
                    <ul class="social-icon">
                         <li><a href="#" class="fa fa-facebook"></a></li>
                         <li><a href="#" class="fa fa-twitter"></a></li>
                         <li><a href="#" class="fa fa-google-plus"></a></li>
                         <li><a href="#" class="fa fa-dribbble"></a></li>
                         <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
               </div>
               
          </div>
     </div>
</footer>

{/* <!-- Back top --> */}
<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>

{/* <!-- SCRIPTS --> */}

<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/particles.min.js"></script>
<script src="assets/js/app.js"></script>
<script src="assets/js/jquery.parallax.js"></script>
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
<script src="assets/js/smoothscroll.js"></script>
<script src="assets/js/custom.js"></script>
      </div>);
  }
}
