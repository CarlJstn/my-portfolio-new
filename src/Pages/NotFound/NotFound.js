import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div>
        <p style={styles.header}>Page Not Found</p>
        <p style={styles.subtitle}>
          <span style={styles.bold}>Error 404: </span>
          <span>{window.location.pathname}</span> does not exists
        </p>
      </div>
    );
  }
}

const styles = {
  header: {
    fontSize: "40px",
    margin: "30px 30px 0",
  },
  subtitle: {
    fontSize: "20px",
    margin: "5px 30px",
  },
  bold: {
    fontWeight: "bold",
  },
};

export default NotFound;
