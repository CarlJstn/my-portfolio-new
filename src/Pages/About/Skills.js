import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590985929/pankaj-patel-1IW4HQuauSU-unsplash-min_doxm1f.jpg"
          alt="skills-bg"
          style={styles.bg}
        />
        <div style={styles.main}>
          <div style={styles.titleContainer}>
            <p style={styles.title}>
              {"<"} SKILLS {">"}
            </p>
          </div>
          <div style={styles.skillsContainer}></div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    position: "relative",
  },
  main: {
    height: "100vh",
    width: "100%",
    maxWidth: "1600px",
    margin: "0px auto",
    position: "absolute",
    left: "0",
    right: "0",
  },
  bg: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    position: "absolute",
  },
  titleContainer: {
    width: "235px",
    display: "block",
    margin: "75px auto 0px",
    background: "rgba(128, 128, 128, 0.65)",
    borderRadius: "5px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: "50px",
    fontFamily: '"Open Sans Condensed", sans-serif',
  },
  skillsContainer: {
    width: "calc(100% - 40px)",
    height: "calc(100% - 182px)",
    background: "rgba(128, 128, 128, 0.65)",
    margin: "20px",
    borderRadius: "5px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  },
};

export default Skills;
