import React from "react"

import ScriptTag from "react-script-tag";
class Footer extends React.Component{

    render(){
        return (
            <div>
    
                {/* <!-- Start Footer & Subscribe Section --> */}
    <section class="footer-subscribe-wrapper">
        {/* <!-- Start Subscribe Area --> */}
        <div class="subscribe-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="subscribe-content">
                            <h2>Sign Up Our Newsletter</h2>
                            <span class="sub-title">We Offer An Informative Monthly Technology Newsletter - Check It Out.</span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <form class="newsletter-form">
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>
                            <button type="submit">Subscribe Now</button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Subscribe Area -->
        <!-- Start Footer Area --> */}
        <div class="footer-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="footer-heading">
                                <h3>About Us</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
                            <ul class="footer-social">
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="footer-heading">
                                <h3>Useful links</h3>
                            </div>
                            <ul class="footer-quick-links">
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>
                                <li> <a href="projects.html">Our Project</a></li>
                                <li> <a href="services.html">Our Services</a></li>
                                <li> <a href="team.html">Dedicated Team</a></li>
                                <li> <a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="footer-heading">
                                <h3>Support Links</h3>
                            </div>
                            <ul class="footer-quick-links">
                                <li>
                                    <a href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="terms-condition.html">Terms & Conditions</a>
                                </li>
                                <li><a href="contact.html">Support</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="footer-heading">
                                <h3>Contact Info</h3>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-call-answer"></i>
                                <h3>Phone</h3>
                                <span><a href="tel:0802235678">080 707 555-321</a></span>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-envelope"></i>
                                <h3>Email</h3>
                                <span><a href="mailto:demo@example.com">demo@example.com</a></span>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-maps-and-flags"></i>
                                <h3>Address</h3>
                                <span>526  Melrose Street, Water Mill, 11976  New York</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Footer Section --> */}
    </section>
    {/* <!-- End Footer & Subscribe Section -->
    <!-- Start Copy Right Section --> */}
    <div class="copyright-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <p> <i class="far fa-copyright"></i> 2020 Privine - All Rights Reserved.</p>
                </div>
                <div class="col-lg-6 col-md-6">
                    <ul>
                        <li>
                            <a href="terms-condition.html">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="go-top">
        <i class="fas fa-chevron-up"></i>
        <i class="fas fa-chevron-up"></i>
    </div>

  


                </div>
        )
        
    }
}

export default Footer