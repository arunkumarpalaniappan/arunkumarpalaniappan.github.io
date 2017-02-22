import React, { Component } from 'react';

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
let Experience = React.createClass({
  render() {
    return(
      <div>
      <NavBar />
        <div style={styles.pageAlign} >
              <div><h3 style={styles.normalweight}>Experience and Volunteering </h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>BI Developer</b> - Visual BI Solutions - June 2016 - Present</h4>
              <h4 style={styles.normalweight}><b>BI Developer Project Intern </b> - Visual BI Solutions - July 2015 - May 2016</h4>
              <h4 style={styles.normalweight}><b>Codechef Campus Ambassador</b> - Microsoft - May 2014 - April 2016</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Partner</b> - Microsoft - May 2015 - April 2016</h4>
              <h4 style={styles.normalweight}><b>President - IT Associations</b> - Karpagam College of Engineering - May 2015 - April 2016</h4>
              <h4 style={styles.normalweight}><b>Microsoft Student Associate</b> - Microsoft - May 2014 - April 2015</h4>
              <h4 style={styles.normalweight}><b>Vice President - IT Associations</b> - Karpagam College of Engineering - May 2014 - April 2015</h4><br/>
              </div>
              <div><h3 style={styles.normalweight}>Certificates</h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>Intel India Embedded Challenge Finals</b> - Intel Corporation</h4>
              <h4 style={styles.normalweight}><b>Certified in Computer Networks and Data Structures </b> - Microsoft Corporation</h4>
              <h4 style={styles.normalweight}><b>Windows Firewall Implementation</b> - Microsoft Corporation</h4>
              <h4 style={styles.normalweight}><b>14th Place - ACM ICPC Chennai Multi Provisional Contest</b> - ACM ICPC</h4>
              <h4 style={styles.normalweight}><b>Honourable Mention - ACM ICPC Amirtapuri Online Contest</b> - ACM ICPC</h4><br/>
              </div>
              <div><h3 style={styles.normalweight}>Education</h3></div>
              <div style={styles.leftpageAlign}>
              <h4 style={styles.normalweight}><b>B.Tech Information Technology</b> - 7.9CGPA - Karpagam College of Engineering(Autonomus)</h4>
              <h4 style={styles.normalweight}><b>Grade XII</b> - 88% - A.G.N Matriculation and Higher Seconday School</h4>
              <h4 style={styles.normalweight}><b>Grade X</b> - 83% - A.G.N Matriculation and Higher Seconday School</h4>
              </div>
        </div>
      </div>
    );
  }
});

module.exports = Experience;
