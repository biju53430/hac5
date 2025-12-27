import bloodimg from "./blood.png";
import "./Landing.css";
import realTime from "./realtime logo.jpg"
import donation from './donation.jpg';
import Expiry from "./images.jpeg";
import Compliance from './compl.png';
import processing from "./fast proces.png";
import  secure from './images (2).png';
import notification from './notification.png';
import advance from './advance.png';
const Landing = () => {
    const detail = [
        {
            id: '1',
            heading: "Real-time tracking",
            content: "Monitor blood inventor  levels,expiration dates, and donation schedules in real-time across all locations.",
            img: realTime,
        },
        {
            id: '3',
            heading: "Donor management",
            content: "Comprehensive donor database with eligibility tracking,appointmaint scheduling, and communication tools",
            img: donation,
        },
        {
            id: '3',
            heading: "Comliance Ready",
            content: "Built-in compliance with FDA, AABB , and international blood banking regulations and standard.",
            img : Compliance,
        },
        {
            id: '4',
            heading: "Advance Analytics",
            content: "Powerful insights and reporting to optimize operations, predict demand, and reduce wastage.",
            img:advance,
           
        },
        {
            id: '5',
            heading: "Expiry Management",
            content: "Automated alerts for blood product expiration with smart rotation and distribution recommendations.",
            img :Expiry,
        },
        {
            id: '6',
            heading: "Fast Processing ",
            content: "Streamlined workflows for blood collection, testing , processing and distribution.",
            img : processing,
        },
        {
            id: '7',
            heading: "Sucure Storage",
            content: "Enterprise-grade security with HIPPA compliance and encrypted data storage.",
            img : secure,
        },
        {
            id: '8',
            heading: "Smart Notifications",
            content: "Automated alerts for critical events ,low inventory, and urgent blood requests.",
            img: notification,
        },


    ]
    return (
        <>

            <div className="landing">
                <div className="nav">
                    <img src={bloodimg} alt="Blood" className="blood-img" />
                    <h3 className="bloodflowtext">Blood <span style={{ color: "red" }}>flow</span></h3>
                    <div className="anchor-text">
                        <a id="a1" href=""  style={{ textDecoration: "none", color: 'white' }}> <center>features</center></a>
                        <a id="a2" href="/" style={{ textDecoration: "none", color: "white" }}> <center>About</center></a>
                        <a id="a3" href="/" style={{ textDecoration: "none", color: "white" }}><center>Impact</center></a>
                    </div>
                    <div className="btn">

                        <button id="btn1" className="btn btn-primary">Sign in</button>
                        <button className="btn btn-danger">Get started</button>
                    </div>

                </div>

                {/* nav ko kam sakeyo */}
                <div id="text-box">
                    <h3 id="text"><center>🔴Next-generation blood management</center></h3>
                </div>

                <div className="text-box2">
                    <h1 id="text3">Revolutionizing <span style={{ color: "red" }}>Blood management </span> Software</h1>
                </div>
                <h3 className="middle-text">Streamline blood bank operation , track donations in real-time, and save more lives with our comprehensive blood management platform

                </h3>


                <div id="button-boxx">
                    <button className="btn-primary" >
                        <span> Start Free Trial</span> <span>→</span>
                    </button>

                    <button className="btn-secondary" style={{ borderColor: "red" }}>
                        <span style={{ color: "red" }}> ▶ Watch Demo</span>
                    </button>
                </div>

                <hr />
                <div id="main-box">
                    <h3 id="heading-text">Trusted by leading blood banks worldwide</h3>
                    <div className="redcross-textbox">
                        <h3 style={{ fontFamily: "initial", fontWeight: "bold" }}>RedCross+</h3>
                        <h3 style={{ fontFamily: "initial", fontWeight: "bold" }}>LifeBlood</h3>
                        <h3 style={{ fontFamily: "initial", fontWeight: "bold" }}>VitalBank</h3>
                    </div>
                    <h1 style={
                        {
                            fontFamily: "initial",
                            fontWeight: "bold",
                            position: "absolute",
                            left: "600px",
                            top: "150px",

                        }
                    }>Powerful <span style={{ color: "red" }}>Features</span></h1>
                    <h3 id="slogan-text">Everything you need blood bank operations efficiently and save more lives</h3>

                    <div className="features-container">
                        {detail.map((item) => {
                            return (
                                <>
                                    <div className="main-detail-box">
                                        <div className="detail-box" key={item.id}>
                                            <img src={item.img} alt="" id="logo" />
                                            <h1 id="heading-in-box">{item.heading}</h1>
                                            <h3 id="content-in-box">{item.content}</h3>
                                        </div>
                                    </div>

                                </>

                            );
                        })}
                    </div>





                </div>
                        <div className="why-choose">
                            <div className="why-box">
                          <h1 id="why-choose-text">Why Choose <span style={{color:"red"}}>BloodFlow</span>?</h1>
                          <p className="why-choose-innertext">BloodFLow is the most comprehensive blood bank management software designed for modern healthcare facilities. our platform combines cutting-edge technology with intuitive design to help you save more lives.</p>
                          <h5>✔️ Reduce blood wastage by up to 40%</h5>
                          <h5>✔️ increase donor retention rates </h5>
                          <h5>✔️ Streamline regulates compliance</h5>
                          <h5>✔️ Seamless integration with lab system</h5>
                          <h5>✔️ 24/7 real-time inventory visibility </h5>

                            </div>
 

 {/* box xa yha */}
                            <div className="analytics-wrapper">
      <div className="analytics-card">

        {/* Top stats */}
        <div className="stats-row">
          <div className="stat-box">
            <h2>2.5K</h2>
            <p>Units</p>
          </div>
          <div className="stat-box">
            <h2>98%</h2>
            <p>Uptime</p>
          </div>
          <div className="stat-box">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-row">
          <div className="bar b1"></div>
          <div className="bar b2"></div>
          <div className="bar b3"></div>
          <div className="bar b4"></div>
          <div className="bar b5"></div>
          <div className="bar b6"></div>
        </div>

      </div>
      {/* box end vayo */}
    </div>
                        </div>


<div className="trusted-box">
    <h1 id="trusted-text">Trusted By <span style={{color:"red"}}>Healthcare leaders</span></h1>
    <center id="trusted-innertext">Join hundreds of blood banks worldwide that trust BloodFlow to manage their Critical operations.</center>

    <div className="trusted-main-box">
    <div className="review-box">
    <center> <div className="review-innerbox"><h4 className="review-innertext" style={{color:"red" , fontSize:"4vh", fontFamily:"initial"}}>500+</h4><span>BLOOD BANKS</span></div> </center>
    </div>

    <div className="review-box">
    <center> <div className="review-innerbox"><h4 className="review-innertext"  style={{color:"red" , fontSize:"4vh" , fontFamily:"initial"}}>2M+</h4><span>DONATIONS TRACKED</span></div> </center>
    </div>

    <div className="review-box">
    <center> <div className="review-innerbox"><h4 className="review-innertext"  style={{color:"red" , fontSize:"4vh" , fontFamily:"initial"}}>99.9%</h4><span>UPTIME</span></div> </center>
    </div>

    <div className="review-box">
    <center> <div className="review-innerbox"><h4 className="review-innertext "  style={{color:"red", fontSize:"4vh" , fontFamily:"initial"}}>50+</h4><span>countries</span></div> </center>
    </div>
    </div>
</div>
            </div>
            <div className="last-box">
               <center> <h1 className="last-innertext">Ready to Transform your <span style={{color:"red"}}>Blood Bank Operations</span>?</h1> </center>
               <center style={{fontWeight:"700" , fontFamily:"inherit" , position:"relative", top:"140px" ,left:"410px", width:"700px" }}>Start free trial and see how BloodFlow can help you save more lives while reducing costs and improving efficiency.</center>


              <button className="btn btn-danger" id="btn-start" >Start Free Trial</button>
              <button className="btn btn-outline-danger" id="btn-start1" type="button">Schedule Demo</button>
              <p id="btn-text">No credit card required • 14-days free trial • Full features access</p>
            </div>
            <div className="final-box">
   
            <div className="final-logo"><img src={bloodimg} alt="" style={{height:"50px" , width:"60px"}} /> <h3 id="final-text">Blood<span>Flow</span></h3></div>
            <div className="footer">
                <h4 style={{fontSize:"2.5vh"}} id="b1">Privacy</h4>
                <h4 style={{fontSize:"2.5vh"}} id="b2">Terms</h4>
                <h4 style={{fontSize:"2.5vh"}} id="b3">Contact</h4>
            </div>
            <p style={{
                position:"absolute",
                right:"10px",
                top:"100px"
            }}>© 2024 BloodFlow. All rights reserved.</p>
            </div>

        </>
    );
};

export default Landing;
