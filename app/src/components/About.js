import React, { Component } from 'react';

let NavBar = require('./NavBar');
const styles = {
  pageAlign : {
    "padding" : "50px"
  },
  normalweight : {
    fontWeight : "normal"
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
              I enjoy being challenged and <b>working on projects that require me to work outside my comfort and knowledge set</b>, as continuing to learn new languages and development techniques are important to me. I am always eager to learn and work on latest techologies.I aspire to work in IT. I am self motivated and possess the following skills: <b>Java Script, React JS, C, Microsoft Server, Computer Networks, HTML + CSS 3 , Node JS, Python</b>. I live in Chennai and am working as <b>JavaScript Developer</b> at Visual BI Solutions.<br/><br/>
              Previously I did my Internship at Visual BI Solutions and Also I has represented my insitution as <b>Microsoft Student Partner</b> and <b>Codechef Campus Ambasaddor</b> for the two consecutive years. I'm also the one the top 40 finalist in <b>Intel India Embedded Challenge 2014</b>, Which is held at Leela Palace, Bangalore. I have also participated in <b>ACM ICPC Asia Regionals</b> 2015.<br/><br/>
              My favorite quote is <b>"When you're dead, you're dead, and until then there's ice cream"</b> said by Jane Patrick - Fictional Character in the series Mentalist.

              </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
