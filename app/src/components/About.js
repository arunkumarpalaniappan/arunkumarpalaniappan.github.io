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
let About = React.createClass({
  render() {
    return(
      <div>
      <NavBar />
        <div style={styles.pageAlign} >
              <div><h3 style={styles.normalweight}>About</h3></div>
              <div style={styles.pageAlign} >
              Software Engineer II with hands-on experience in <b>Node JS, Express
              JS,React JS, Redux, Mongo DB, Postgres , React Native, AWS &
              Microsoft Azure.</b><br/><br/>
              Designed and Built India’s Largest Retail Automation System
              for Maharatna Oil and Gas Govt. Enterprise using Node JS.<br/><br/>
              Designed and Built Education Streaming (VOD) Platform using
              Node, React and Python which supports Real-Time Video Encoding
              and Encryption on Google Cloud Platform,which is currently being
              used by more than 10 Million Students across India.<br/><br/>
              With 5+ years of work experience, I hold a Bachelor degree in
              Computer Science.<br/><br/><br/><br/>

              <a href="https://practice.sh">https://practice.sh</a><br/>
              <a href="https://in.linkedin.com/in/arunkumarpalaniappan">https://in.linkedin.com/in/arunkumarpalaniappan</a><br/>
              <a href="https://icpc.baylor.edu/ICPCID/T8EGW7IOQ4V4">https://icpc.baylor.edu/ICPCID/T8EGW7IOQ4V4</a><br/>
              
              

              </div>
        </div>
        <div style={styles.pageAlign} >
              <div><h3 style={styles.normalweight}>Experience and Volunteering </h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>Professional Member</b> - ACM, 2016-Present</h4>
              <h4 style={styles.normalweight}><b>Software Development Engineer II</b> - The Data Team - Dec 2018 - Present</h4>
              <h4 style={styles.normalweight}><b>Software Development Engineer(Full Stack)</b> - Greatest Common Factor - July 2018 - Dec 2018</h4>
              <h4 style={styles.normalweight}><b>Specialist BI Developer</b> - Visual BI Solutions - July 2015 - July 2018</h4>
              <h4 style={styles.normalweight}><b>Codechef Campus Ambassador</b> - Microsoft - May 2014 - April 2016</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Partner</b> - Microsoft - May 2015 - April 2016</h4>
              <h4 style={styles.normalweight}><b>President - IT Associations</b> - Karpagam College of Engineering - May 2015 - April 2016</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Associate</b> - Microsoft - May 2014 - April 2015</h4>
              <h4 style={styles.normalweight}><b>Vice President - IT Associations</b> - Karpagam College of Engineering - May 2014 - April 2015</h4><br/>
              </div>
              <div><h3 style={styles.normalweight}>Certifications and Regonitions</h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>Intel India Embedded Challenge Finals</b> - Intel Corporation</h4>
              <h4 style={styles.normalweight}><b>Certified in Computer Networks and Data Structures </b> - Microsoft Corporation</h4>
              <h4 style={styles.normalweight}><b>14th Place in ACM ICPC Chennai Multi Provisional Programming Contest,Feb 2015</b> - ACM ICPC</h4>
              <h4 style={styles.normalweight}><b>204th Rank in ACM ICPC Asia Amirtapuri site regionals,Dec 2015</b> - ACM ICPC</h4>
              <h4 style={styles.normalweight}><b>Algorithms and Data Structures - Coursera, July 2017 - Aug 2017</b> - Coursera</h4>
              <h4 style={styles.normalweight}><b>Bronze in Hackerrank 101 Hack January 15, Jan 2015</b> - Hackerrank </h4>
              <h4 style={styles.normalweight}><b>Codechef Campus Ambassador for Karpagam College of Engineering, 2014-2016</b> - Codechef</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Partner for Karpagam College of Engineering, 2015 - 2016</b> - Microsoft</h4>
              <h4 style={styles.normalweight}><b>Student Member @ ACM (Association for Computing Machinery, 2014-2016</b> - ACM</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Associate for Karpagam College of Engineering, 2014 - 2015</b> - Microsoft</h4>
              <br/>
              </div>
              <div><h3 style={styles.normalweight}>Education</h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>B.Tech Information Technology</b> - 7.9CGPA - Karpagam College of Engineering(Autonomus)</h4>
              </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
