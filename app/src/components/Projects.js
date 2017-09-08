import React from 'react';

let NavBar = require('./NavBar');
const styles = {
  pageAlign : {
    paddingLeft : "50px"
  },
  leftpageAlign : {
    paddingLeft: "50px",
  },
  normalweight : {
    fontWeight : "normal"
  },
  linkStyle : {
    "color": "#000",
    textDecoration: "none"
  }
}
let Projects = React.createClass({
  render() {
    return(
      <div>
      <NavBar />
        <div style={styles.pageAlign} >
              <div><h3 style={styles.normalweight}>Projects</h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>win10batteryoptimizer</b> - <a href="https://pypi.python.org/pypi?:action=display&name=win10batteryoptimizer&version=0.1.1" style={styles.linkStyle} target="_blank"> Project Link</a> | <a href="https://github.com/arunkumarpalaniappan/win10batteryoptimizer" style={styles.linkStyle} target="_blank">Github</a></h4>
                This is a python package to maintain good battery life in windows 10. This package provides api to alerts when battery reaches below 40 or more than 80 percent, which is the optimal battery working percentage.<br/><br/>
              <h4 style={styles.normalweight}><b>Portfolio</b> - <a href="http://arunkumarpalaniappan.me" style={styles.linkStyle} target="_blank"> Project Link</a> | <a href="https://github.com/arunkumarpalaniappan/arunkumarpalaniappan.github.io" style={styles.linkStyle} target="_blank">Github</a></h4>
                This application is developed in React JS, This is the source code of the user portfolio.<br/><br/>
                <h4 style={styles.normalweight}><b>mydoShare</b> - <a href="http://mydoshare.arunkumarpalaniappan.me" style={styles.linkStyle} target="_blank"> Project Link</a> | <a href="http://github.com/arunkumarpalaniappan/mydoshare" style={styles.linkStyle} target="_blank">Github</a></h4>
                  This application is developed in PHP, This application can be used to split group expenses,bills and IOUs in a single click with room mates/friends. Users can signup and create a share group and another user can join the same share group after the approval of the members and start sharing expenses easily and effectively.<br/><br/>
                  <h4 style={styles.normalweight}><b>Currency Converter</b> -<a href="https://github.com/arunkumarpalaniappan/live-currency-converter" style={styles.linkStyle} target="_blank">Github</a></h4>
                    This application is developed in PHP, This simple script which creates the API to use currency conversion directly from your web app using Google Finance.<br/><br/>
                    <h4 style={styles.normalweight}><b>PHP Encryption</b> -<a href="http://phpencryption.arunkumarpalaniappan.me" style={styles.linkStyle} target="_blank"> Project Link</a> | <a href="https://github.com/arunkumarpalaniappan/phpencryption" style={styles.linkStyle} target="_blank">Github</a></h4>
                      This application is developed in PHP, This simple script which use PHP's mcrypt functions can be used to encrypt data, but it's not easy to use them correctly. So Here is a simple PHP API which makes this process more easier than ever. On passing a string to the function the string can be encrypted and similarly another function is used to decrypt the encrypted string.<br/><br/>
                      <h4 style={styles.normalweight}><b>System Status</b> -<a href="https://github.com/arunkumarpalaniappan/systemstatus" style={styles.linkStyle} target="_blank">Github</a></h4>
                        This application is developed in PHP, This simple application which help us to moniter the systems status and send a email alert if something unexpected happens or system recovers from a down time. It purely runs on PHP and it uses PHPMailer to delever email to your inbox.<br/><br/>
                        <h4 style={styles.normalweight}><b>Real Time Location Tracking Device for Women's Safety</b> - Intel India Embedded Challenge Finals 2014 </h4>
                        This is the IoT prototype designed using Intel Galileo and C Program.  This device send emergency alerts to nearest police stations and family members in case of emergenceny with current location, After the device is switched on, it sends location for every 5 seconds and it uses GPRS to transmit messages.<br/><br/>
                        <h4 style={styles.normalweight}><b>Restricting Access to Certain Websites using DNS</b> - POC for Restricting internet access using existing systems</h4>
                        This is Proof of Concept done using DNS Server.The Idea is very simple, we blocked access to many websites using DNS Server, The DNS adds a fake entry to the particular website and when the url is requested, it responds the fake ip address.<br/><br/>
                        <h4 style={styles.normalweight}><b>Library Management Using JSP</b></h4>
                        This is done use JSP for internal libary management in our institution with emailing support. The user and admin will be notified automatically about the late submission or book availability.<br/><br/>
              </div>
        </div>
      </div>
    );
  }
});

module.exports = Projects;
