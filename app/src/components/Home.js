import React from 'react';

const styles = {
  viewContainer : {
    flexFlow: "column",
    "width": "100vw",
    minHeight: "100vh",
    "color": "#cdd1c4",
    fontSize: 14,
    "display": "-webkit-box",
    "display": "-ms-flexbox",
    "display": "flex",
    WebkitBoxPack: "center",
    msFlexPack: "center",
    justifyContent : "center",
    WebkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center"
  },
  infoContainer : {
    flexFlow: "row",
    "background": "#171719",
    "width": "calc(100vw - 24px)",
    "height": "calc(100vh - 24px)",
    "padding":" 12px",
    "display": "-webkit-box",
    "display": "-ms-flexbox",
    "display": "flex",
    WebkitBoxPack: "center",
    msFlexPack: "center",
    justifyContent : "center",
    WebkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center"
  },
  linkStyle : {
    "color": "#cdd1c4",
    textDecoration: "none"
  },
  alignCenter : {
    textAlign : "center"
  }
}
let Home = React.createClass({
  render() {
    return(
      <div>
        <div style={styles.viewContainer}>
            <div style={styles.infoContainer}>
              <div style={styles.alignCenter}>Arunkumar Palaniappan / Software Development Engineer II <br/> <a href="https://github.com/arunkumarpalaniappan" style={styles.linkStyle} target="_blank">Github ↗</a> | <a href="https://linkedin.com/in/arunkumarpalaniappan" style={styles.linkStyle} target="_blank">LinkedIn ↗</a> | <a href="https://icpc.baylor.edu/ICPCID/T8EGW7IOQ4V4" style={styles.linkStyle} target="_blank">ICPC ↗</a><br/><a href="#/me" style={styles.linkStyle} >About</a> | <a href="#/pro" style={styles.linkStyle} >Projects</a> | <a href="https://practice.sh?ref=profile-landing" style={styles.linkStyle} >Blog</a>  </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
