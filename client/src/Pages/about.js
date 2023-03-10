import React from 'react'

class About extends React.Component{

    render(){
        return (
            <div>
             
{/* <!-- Start Page Title Area --> */}
<div class="page-title-area">
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="page-title-content">
                    <h2>About Us</h2>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- End Page Title Area -->
<!-- Start Features Section --> */}
<section class="features-section bg-grey pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h6>We Provide Legal And Technical Features</h6>
            <h2>Exclusive Features</h2>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="single-features-box">
                    <div class="features-icon">
                        <svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0326 25.2474C27.6043 25.2474 24.8041 28.0529 24.8041 31.4995C24.8041 34.9461 27.6043 37.7516 31.0326 37.7516C34.4871 37.7516 37.2873 34.9461 37.2873 31.4995C37.2873 28.0529 34.4871 25.2474 31.0326 25.2474ZM31.0327 42.9856C24.6995 42.9856 19.5701 37.8327 19.5701 31.4995C19.5701 25.1663 24.6995 20.0134 31.0327 20.0134C37.3659 20.0134 42.5214 25.1663 42.5214 31.4995C42.5214 37.8327 37.3659 42.9856 31.0327 42.9856ZM28.4675 57.0155H33.623V53.4485C33.623 51.3313 35.1409 49.2246 37.156 48.5494L38.9356 47.8009C39.459 47.5419 40.2179 47.3665 41.003 47.3665C42.4424 47.3665 43.8032 47.9056 44.7192 48.8478L47.2577 51.3706L50.8953 47.7172L48.383 45.1944C46.8913 43.6922 46.4726 41.1328 47.4147 39.238L48.1475 37.4402C48.7494 35.6004 50.8692 34.0799 52.989 34.0799H56.5481V28.9191H52.989C50.8692 28.9191 48.7494 27.3986 48.0951 25.3835L47.3362 23.5961C46.4726 21.8715 46.8913 19.3147 48.383 17.8125L50.8953 15.2845L47.2577 11.6311L44.7192 14.1539C43.2536 15.6247 40.6366 16.0565 38.7785 15.1222L36.9728 14.3868C35.1409 13.7797 33.623 11.673 33.623 9.55318V5.98356H28.4675V9.55318C28.4675 11.6756 26.9496 13.7823 24.9345 14.4522L23.1287 15.2007C22.6315 15.4572 21.8464 15.6351 21.0613 15.6351C19.6481 15.6351 18.2873 15.0934 17.3451 14.1513L14.8328 11.6311L11.169 15.2845L13.7075 17.8073C15.1992 19.3147 15.6179 21.8715 14.6496 23.7636L13.943 25.5563C13.3149 27.4039 11.2213 28.9191 9.10152 28.9191H5.5162V34.0799H9.10152C11.2213 34.0799 13.3149 35.5952 13.9953 37.605L14.7543 39.4108C15.6179 41.1328 15.1992 43.6922 13.7075 45.1918L11.169 47.7172L14.8328 51.3706L17.3451 48.8478C18.8107 47.3822 21.4277 46.9399 23.3119 47.8795L25.0915 48.6122C26.9758 49.2325 28.4675 51.2947 28.4675 53.4485V57.0155ZM34.4082 62.2495H27.6824C25.2224 62.2495 23.2335 60.2527 23.2335 57.798V53.4485L21.1399 52.6398L17.9733 55.6258C16.2984 57.3007 13.3412 57.3007 11.6663 55.6258L6.92946 50.8629C6.09201 50.0333 5.62095 48.9132 5.62095 47.7172C5.62095 46.5238 6.09201 45.4037 6.92946 44.5663L9.99138 41.4939L9.10159 39.4317L4.73116 39.3139C2.29733 39.3139 0.282227 37.3198 0.282227 34.865V28.1366C0.282227 25.6819 2.29733 23.6851 4.73116 23.6851H9.10159L9.91287 21.6019L6.92946 18.4301C6.09201 17.5979 5.62095 16.4778 5.62095 15.2844C5.62095 14.0885 6.09201 12.9684 6.92946 12.1309L11.6663 7.37581C13.3412 5.70092 16.2984 5.6983 17.9733 7.37843L21.0352 10.4534L23.1027 9.55055L23.2335 5.20107C23.2335 2.7463 25.2224 0.749512 27.6824 0.749512H34.4082C36.8682 0.749512 38.8571 2.7463 38.8571 5.20107V9.55317L40.9507 10.3644L44.1173 7.37581C44.9548 6.53575 46.0801 6.07515 47.2578 6.07515C48.4354 6.07515 49.5607 6.53575 50.3982 7.37319L55.1612 12.1388C55.9986 12.9684 56.4697 14.0885 56.4697 15.2844C56.4697 16.4778 55.9986 17.5979 55.1612 18.4353L52.0731 21.5077L52.989 23.5595L57.3333 23.6851C59.7933 23.6851 61.7822 25.6819 61.7822 28.1366V34.865C61.7822 37.3198 59.7933 39.3139 57.3333 39.3139H52.989L52.1778 41.4049L55.1612 44.5715C55.9986 45.4037 56.4697 46.5238 56.4697 47.7172C56.4697 48.9132 55.9986 50.0333 55.1612 50.8707L50.3982 55.6232C48.7233 57.3086 45.7922 57.3007 44.1173 55.6311L41.0292 52.5482L38.988 53.4485L38.8571 57.798C38.8571 60.2527 36.8682 62.2495 34.4082 62.2495Z" fill="#7B68EE"></path>
                        </svg>
                    </div>
                    <div class="features-info">
                        <h3>Creative IT Solutions</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                        <div class="features-btn">
                            <a href="#" class="features-btn-one">Read More <i class="flaticon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="single-features-box">
                    <div class="features-icon">
                        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.672852 74.4101H74.4929V0.590088H0.672852V74.4101Z" fill="#FFFFFE"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5826 8.28035C21.4698 8.28035 8.36214 21.388 8.36214 37.5008C8.36214 53.6135 21.4698 66.7212 37.5826 66.7212C53.6953 66.7212 66.803 53.6135 66.803 37.5008C66.803 21.388 53.6953 8.28035 37.5826 8.28035ZM37.5824 69.7964C19.7733 69.7964 5.28613 55.3076 5.28613 37.5001C5.28613 19.6926 19.7733 5.20386 37.5824 5.20386C55.3915 5.20386 69.8786 19.6926 69.8786 37.5001C69.8786 55.3076 55.3915 69.7964 37.5824 69.7964Z" fill="#FFC800"></path>
                            <path d="M37.5826 7.28035C20.9175 7.28035 7.36214 20.8357 7.36214 37.5008H9.36214C9.36214 21.9403 22.0221 9.28035 37.5826 9.28035V7.28035ZM7.36214 37.5008C7.36214 54.1658 20.9175 67.7212 37.5826 67.7212V65.7212C22.0221 65.7212 9.36214 53.0612 9.36214 37.5008H7.36214ZM37.5826 67.7212C54.2476 67.7212 67.803 54.1658 67.803 37.5008H65.803C65.803 53.0612 53.143 65.7212 37.5826 65.7212V67.7212ZM67.803 37.5008C67.803 20.8357 54.2476 7.28035 37.5826 7.28035V9.28035C53.143 9.28035 65.803 21.9403 65.803 37.5008H67.803ZM37.5824 68.7964C20.3256 68.7964 6.28613 54.7554 6.28613 37.5001H4.28613C4.28613 55.8599 19.221 70.7964 37.5824 70.7964V68.7964ZM6.28613 37.5001C6.28613 20.2448 20.3256 6.20386 37.5824 6.20386V4.20386C19.221 4.20386 4.28613 19.1403 4.28613 37.5001H6.28613ZM37.5824 6.20386C54.8391 6.20386 68.8786 20.2448 68.8786 37.5001H70.8786C70.8786 19.1403 55.9438 4.20386 37.5824 4.20386V6.20386ZM68.8786 37.5001C68.8786 54.7554 54.8391 68.7964 37.5824 68.7964V70.7964C55.9438 70.7964 70.8786 55.8599 70.8786 37.5001H68.8786Z" fill="#FFC800"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9324 35.3258L39.7578 33.1512L52.7717 20.1373L54.9478 22.3119L41.9324 35.3258Z" fill="#FFC800"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5828 34.4246C35.8865 34.4246 34.507 35.8056 34.507 37.5004C34.507 39.1968 35.8865 40.5763 37.5828 40.5763C39.2791 40.5763 40.6587 39.1968 40.6587 37.5004C40.6587 35.8056 39.2791 34.4246 37.5828 34.4246ZM37.5823 43.6521C34.1897 43.6521 31.4307 40.8931 31.4307 37.5004C31.4307 34.1078 34.1897 31.3488 37.5823 31.3488C40.975 31.3488 43.734 34.1078 43.734 37.5004C43.734 40.8931 40.975 43.6521 37.5823 43.6521Z" fill="#FFC800"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5895 37.5001H14.5137C14.5137 24.78 24.8623 14.4314 37.5824 14.4314C40.9335 14.4314 44.1662 15.1342 47.1913 16.5214L45.9087 19.3189C43.2881 18.1178 40.4875 17.5072 37.5824 17.5072C26.5586 17.5072 17.5895 26.4764 17.5895 37.5001Z" fill="#FFC800"></path>
                        </svg>
                    </div>
                    <div class="features-info">
                        <h3>24/7 Hours Fast Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                        <div class="features-btn">
                            <a href="#" class="features-btn-one">Read More <i class="flaticon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="single-features-box">
                    <div class="features-icon">
                        <svg width="60" height="60" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.125C6 0.50368 6.50368 0 7.125 0H19.875C20.4963 0 21 0.50368 21 1.125V3H25.5C26.3284 3 27 3.67157 27 4.5V6C27 9.83791 24.1173 13.0025 20.399 13.4467C19.444 15.6798 17.4364 17.3554 15 17.85V21H18C18.8284 21 19.5 21.6716 19.5 22.5C19.5 23.3284 18.8284 24 18 24H9C8.17157 24 7.5 23.3284 7.5 22.5C7.5 21.6716 8.17157 21 9 21H12V17.85C9.56358 17.3554 7.55604 15.6798 6.60101 13.4467C2.88272 13.0025 0 9.83791 0 6V4.5C0 3.67157 0.671573 3 1.5 3H6V1.125ZM9 3V10.5C9 12.9853 11.0147 15 13.5 15C15.9853 15 18 12.9853 18 10.5V3H9ZM21 6V10.2439C22.7478 9.62619 24 7.95933 24 6H21ZM6 10.2439V6H3C3 7.95933 4.25221 9.62619 6 10.2439Z" fill="#49CCF9"></path>
                        </svg>
                    </div>
                    <div class="features-info">
                        <h3>Award Winning Company</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                        <div class="features-btn">
                            <a href="#" class="features-btn-one">Read More <i class="flaticon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="single-features-box">
                    <div class="features-icon">
                        <svg width="60" height="60" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7152 4.80298C21.1988 4.80298 14.7782 5.83411 8.59709 7.87019C7.01589 8.36552 5.72218 10.0992 5.72218 11.6709V35.175C5.72218 37.2111 6.99194 40.7975 8.64501 42.5335C17.3177 51.3779 22.9237 56.1788 27.7152 56.1788C32.4828 56.1788 38.0889 51.3755 46.7855 42.5097C48.4386 40.7975 49.6844 37.2111 49.7083 35.156V11.6756C49.7083 10.1563 48.3427 8.34647 46.8574 7.87972C40.6523 5.83411 34.2078 4.80298 27.7152 4.80298ZM27.7154 60.9412C21.1989 60.9412 15.0179 55.857 5.19527 45.8386C2.53598 43.0643 0.930823 38.2515 0.930823 35.1867V11.6754C0.906866 8.03193 3.59012 4.44559 7.11188 3.33825C20.3844 -1.02918 34.9985 -1.04585 48.3429 3.34778C51.7688 4.42654 54.5 8.09147 54.5 11.6754V35.1676C54.476 38.2539 52.8709 43.0738 50.2355 45.8171C40.389 55.8546 34.2319 60.9412 27.7154 60.9412Z" fill="#FD71AF"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7111 13.1361V35.1304C11.7111 35.8425 12.5017 37.9142 12.9329 38.3715C16.4068 41.915 24.5524 50.226 27.7148 50.226C30.8532 50.226 38.9509 41.9626 42.4247 38.4358C42.9278 37.9047 43.6945 35.8139 43.7184 35.1495V13.1289C33.3448 9.9855 22.1806 9.96883 11.7111 13.1361ZM27.7149 52.6071C23.8577 52.6071 17.461 46.394 11.2081 40.0262C10.2737 39.0546 9.33939 36.3756 9.31543 35.1468V12.2594C9.31543 11.7426 9.65084 11.283 10.13 11.1259C21.6057 7.46331 33.9438 7.48236 45.2758 11.1211C45.7789 11.2807 46.1143 11.7379 46.1143 12.2546V35.1682C46.0903 36.4018 45.1081 39.0808 44.1737 40.0524C37.9208 46.4274 31.5481 52.6071 27.7149 52.6071Z" fill="#FD71AF"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3426 36.3992C24.6718 36.3992 24.0489 36.1325 23.5937 35.6586L19.6646 31.5578C18.7542 30.6053 18.8021 29.0979 19.7605 28.1906C20.7188 27.2856 22.2281 27.319 23.1385 28.2739L25.1988 30.4243L32.1705 21.9894C33.009 20.9774 34.5183 20.8226 35.5245 21.6584C36.5547 22.4943 36.6985 23.9946 35.86 25.0114L27.1873 35.5276C26.7561 36.0539 26.1092 36.373 25.4144 36.3968L25.3426 36.3992Z" fill="#FD71AF"></path>
                        </svg>
                    </div>
                    <div class="features-info">
                        <h3>Start to End Security</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                        <div class="features-btn">
                            <a href="#" class="features-btn-one">Read More <i class="flaticon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End Features Section -->
<!-- About Section Start --> */}
<section class="about-area ptb-100">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="about-img-wrapper">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12 rcom-padding valign">
                            <div class="about-images-1">
                                <img src="assets/img/about-1.jpg" alt="about image"/>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12 rcom-padding">
                            <div class="about-images-2">
                                <img src="assets/img/about-2.jpg" alt="about image"/>
                                <a href="https://www.youtube.com/watch?v=eVfBqJ5PSTk" class="video-btn popup-youtube">
                                    <i class="fa fa-play"></i>
                                    <span>Watch Video</span>
                                </a>
                            </div>
                            <div class="about-images-3">
                                <img src="assets/img/about-3.jpg" alt="about image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1 col-md-12 col-sm-12 valign">
                <div class="about-content">
                    <div class="about-content-text">
                        <h6>Privine - ABOUT US</h6>
                        <h2>Great Digital Agency Since - 1970.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur adipiscing elit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur adipiscing elit.</p>
                    </div>
                    <div class="about-btn">
                        <a class="default-btn" href="about.html">Read More <span></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- About Section End -->
<!-- Start Fun Facts Section --> */}
<section class="fun-facts-area ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                    <h3>
                        <span class="odometer" data-count="1250">00</span>
                        <span class="sign-icon">+</span>
                    </h3>
                    <p>Project Management</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                    <h3>
                        <span class="odometer" data-count="1050">00</span>
                        <span class="sign-icon">+</span>
                    </h3>
                    <p>Data Management</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                    <h3>
                        <span class="odometer" data-count="1700">00</span>
                        <span class="sign-icon">+</span>
                    </h3>
                    <p>Managed Analytics</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                    <h3>
                        <span class="odometer" data-count="5700">00</span>
                        <span class="sign-icon">+</span>
                    </h3>
                    <p>IT Consulting</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End Fun Facts Section -->
<!-- Start Team Section --> */}
<section class="team-section pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h6>Our Experts Team</h6>
            <h2>Meet Our Team Member</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-team-item">
                    <div class="team-image">
                        <img src="assets/img/team/team-1.jpg" alt="team"/>
                    </div>
                    <div class="team-content">
                        <h3>Herman Boone</h3>
                        <span>Founder and CEO</span>

                        <div class="team-social">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-team-item">
                    <div class="team-image">
                        <img src="assets/img/team/team-2.jpg" alt="team"/>
                    </div>
                    <div class="team-content">
                        <h3>Lucille Edwards</h3>
                        <span>Co-founder and CTO</span>
                        <div class="team-social">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-team-item">
                    <div class="team-image">
                        <img src="assets/img/team/team-3.jpg" alt="team"/>
                    </div>
                    <div class="team-content">
                        <h3>Bernard Barrett</h3>
                        <span>Chief Financial Officer</span>
                        <div class="team-social">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End Team Section -->
<!-- Start Testimonial Section --> */}
<section class="testimonial-section ptb-100">
    <div class="container">
        <div class="section-title">
            <h6>Testimonial</h6>
            <h2>What Our Client Say</h2>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="testimonial-slider owl-carousel owl-theme">
                    {/* <!-- testimonials item --> */}
                    <div class="single-testimonial">
                        <div class="testi-content-inner">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div class="avatar">
                                <img src="assets/img/client/testimonial-1.jpg" alt="testimonial images"/>
                            </div>
                            <div class="testimonial-bio">
                                <div class="bio-info">
                                    <h3>Saabir al-Obeid</h3>
                                    <span>Business Man</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- testimonials item --> */}
                    <div class="single-testimonial">
                        <div class="testi-content-inner">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div class="avatar">
                                <img src="assets/img/client/testimonial-2.jpg" alt="testimonial images"/>
                            </div>
                            <div class="testimonial-bio">
                                <div class="bio-info">
                                    <h3>Zahra Burnett</h3>
                                    <span>Business Man</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- testimonials item --> */}
                    <div class="single-testimonial">
                        <div class="testi-content-inner">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                            <div class="avatar">
                                <img src="assets/img/client/testimonial-3.jpg" alt="testimonial images"/>
                            </div>
                            <div class="testimonial-bio">
                                <div class="bio-info">
                                    <h3>Stevie Wills</h3>
                                    <span>Business Man</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End Testimonial Section --> */}

                {/* <!-- End Hire Section -->
    <!-- Partner section --> */}
    <section class="partner-section pt-100 pb-70">
        <div class="container">
            <div class="partner-title">
                <h6>Trusted By Over 40,000</h6>
                <h2>Our Customers</h2>
            </div>
            <div class="partner-list">
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/WEHA.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/ORO.jpg" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-3.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-4.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-5.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-6.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-7.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-8.png" alt="image"/>
                    </a>
                </div>
                <div class="partner-item">
                    <a href="#0">
                        <img src="assets/img/partner/client-1.png" alt="image"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Partner section --> */}
            </div>
        )
    }
}

export default About