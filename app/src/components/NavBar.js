import React from 'react';

const styles = {
  viewContainer : {
    flexFlow: "column",
    "width": "100vw",
    minHeight: "30px",
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
    "width": "calc(100vw - 50px)",
    "height": "30px",
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
let NavBar = React.createClass({
  render() {
    return(
      <div>
        <div style={styles.viewContainer}>
            <div style={styles.infoContainer}>
              <div style={styles.alignCenter}><a href="#/home" style={styles.linkStyle} >Home</a> | <a href="#/me" style={styles.linkStyle} >About</a> | <a href="#/pro" style={styles.linkStyle} >Projects</a> | <a href="#/exp" style={styles.linkStyle} >Experience / Cerifications / Education</a> | <a href="#/reach" style={styles.linkStyle} >Contact</a></div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
