import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div>
                
    <link rel="icon" type="image/png" href="/assets/img/favicon.png"/>
   
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
   
    <link rel="stylesheet" href="/assets/css/animate.min.css"/>

    <link rel="stylesheet" href="/assets/css/flaticon.css"/>
 
    <link rel="stylesheet" href="/assets/css/odometer.min.css"/>
   
    <link rel="stylesheet" href="/assets/css/meanmenu.css"/>
  
    <link rel="stylesheet" href="/assets/css/magnific-popup.min.css"/>
   
    <link rel="stylesheet" href="/assets/css/nice-select.min.css"/>
  
    <link rel="stylesheet" href="/assets/css/swiper.min.css"/>

    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
 
    <link rel="stylesheet" href="/assets/css/fontawesome.min.css"/>
 
    <link rel="stylesheet" href="/assets/css/style.css"/>
 
    <link rel="stylesheet" href="/assets/css/responsive.css"/>
    <link rel="stylesheet" href="/icofont/icofont.min.css"></link>
        
    {/* <!-- Preloader --> */}
    <div class="preloader">
        <div class="loader">
            <div class="shadow"></div>
            <div class="box"></div>
        </div>
    </div>
    {/* <!-- End Preloader -->
    <!-- Start Navbar Area --> */}
    <div class="navbar-area">
        <div class="privine-responsive-nav">
            <div class="container">
                <div class="privine-responsive-menu">
                    <div class="logo">
                        <a href="@Url.Acti">
                            <img src="assets/img/daflogo.jpg" class="white-logo" alt="logo"/>
                            <img src="assets/img/daflogo.jpg" class="black-logo" alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="privine-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="@">
                        <img src="assets/img/daflogo.jpg" class="white-logo" alt="logo"/>
                        <img src="assets/img/daflogo.jpg" class="black-logo" alt="logo" />
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href='/' class="nav-link">Home </a>
                             
                            </li>
                            <li class="nav-item">
                                <a href='/about' className="nav-link">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="/#services" class="nav-link">Services</a>
                                
                            </li>
                            <li class="nav-item">
                                <a href="/Project" class="nav-link">Projects </a>
                               
                            </li>
                            <li class="nav-item">
                                <a href="/Blog" class="nav-link">Blog </a>
                               
                            </li>
                    
                            <li class="nav-item">
                                <a href="/vaccancy" class="nav-link">Vaccancy</a>
                            </li>

                            <li class="nav-item">
                                <a href="/contactus" class="nav-link">Contact Us</a>
                            </li>
                        </ul>
                        <div class="other-option">
                            {/* <img src="assets/img/facebook.png"/> */}
                            <a class="default-btn" href="mailto:demo@example.com"><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/* // <!-- End Navbar Area --> */}
            </div>
        )
    }
}

export default Header