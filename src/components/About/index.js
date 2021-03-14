import React from 'react'
import './index.scss';
import {FaBirthdayCake} from "react-icons/fa";
import {GrUserManager} from "react-icons/gr";
import {MdLocationOn} from "react-icons/md";

const About = () =>{
    return(
        <div className="container">
        <div className="about" id="about">
            <div className="about-name">About</div>
            <div className="about-content">
              <div className="about-img"></div>
              <div className="about-text">
                <div className="about-text1">Who am i?</div>
                <div className="about-text2">I'm NguyenNgocTri and <span className="about-text3"> Front-End Developer</span></div>
                  <div className ="about-text4"> I'm a Web Developer, I am passionate and dedicated to my work. 
                    With the knowledge I learned in college and self-study at home, 
                    I gained the skills and knowledge needed to create a website interface. 
                    I am trying every day to improve my skills to become a senior front end developer</div>
                  <div className="about-icon">
                    <div className="about-icon-left">
                      <div className="info-item">
                        <i><FaBirthdayCake /></i>                    
                        <label for="">Birth day:</label>
                        <span>22.07.1996</span>
                      </div>
                      <div className="info-item">
                        <i><GrUserManager/></i>
                        <label for="">Age:</label>
                        <span>&emsp;25</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-street-view"><MdLocationOn/></i>
                        <label for="">Location:</label>
                        <span>3/2 St, 10Dist,HCM</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-gamepad"></i>
                        <label for="">Interests:</label>
                        <span>Reading Books, Sport...</span>
                      </div>
    
                    </div>
                    <div className="about-icon-reight">
                      <div className="info-item">
                        <i className="fas fa-university"></i>
                        <label for="">Study:</label>
                        <span>University of UTC</span>
                      </div>
                      <div className="info-item">
                        <i className="fas fa-graduation-cap"></i>
                        <label for="">Degree:</label>
                        <span>Junior</span>
                      </div>
                      <div className="info-item">
                        <i className="fa fa-envelope"></i>
                        <label for="">Mail:</label>
                        <span>&ensp;ngoctri2207@gmail.com</span>
                      </div>
                      <div className="info-item">
                        <i className="fa fa-mobile-alt"></i>
                        <label for="">Phone:</label>
                        <span>(+84)337.368.371</span>
                      </div>
                      
                    </div>
                  </div>
                  <div class="about-button">
                    <a href="https://www.topcv.vn/xem-cv/e8e3b19ebe45fcd1b26130dedc009ad5" target="_blank"><button>Download CV</button></a>
                    <a href="https://www.facebook.com/messages/t/100008894625672" target="_blank"><button>Send Messenger</button> </a>
    
                  </div>
                </div>
            </div>
        </div>
        </div>

    )
}
export default About;