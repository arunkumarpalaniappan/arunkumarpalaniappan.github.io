import React, { Component } from 'react';

let NavBar = require('./NavBar');
const styles = {
  pageAlign : {
    "padding" : "50px"
  },
  normalweight : {
    fontWeight : "normal"
  },
  linkStyle : {
    "color": "#000",
    textDecoration: "none"
  }
}
let Contact = React.createClass({
  render() {
    return(
      <div>
      <NavBar />
        <div style={styles.pageAlign} >
              <div style={styles.pageAlign} >
                  Hi, Thankyou for trying to reach me!<br/><br/> You can find some methods to get in touch with me.<br/><br/>
                    LinkedIn - <a href="http://linkedin.com/in/arunkumarpalaniappan" target="_blank" style={styles.linkStyle}> arunkumarpalaniappan </a> <br/>
                    Email - <a href="mailto:contact@arunkumarpalaniappan.me" target="_blank" style={styles.linkStyle}> contact@arunkumarpalaniappan.me </a> <br/>
                    Twitter - <a href="http://twitter.com/kumar_arp" target="_blank" style={styles.linkStyle}> kumar_arp </a> <br/>
                    Facebook - <a href="http://fb.com/arun0304" target="_blank" style={styles.linkStyle}> arun0304 </a> <br/><br/>
                    See you soon!

              </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
