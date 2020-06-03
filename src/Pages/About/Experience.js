import React, { Component } from "react";

import ExperienceList from "./ExperienceList.json";
// Superior, Advanced, Intermediate, and Novice

class Experience extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1591145605/portfolio/exp-bg_vwaze4.jpg"
          alt="experience-bg"
          style={styles.bg}
        />
        <div style={styles.main}>
          <div style={styles.titleContainer}>
            <p style={styles.title}>EXPERIENCE</p>
          </div>
          <div style={styles.expsContainer}>
            <div
              className="horizontal-drag hide-scrollbar"
              style={styles.expsMain}
            >
              {ExperienceList.map((exp) => {
                return (
                  <div key={exp.id} id="exp" style={styles.expContainer}>
                    <img
                      src={exp.icon}
                      alt={`${exp.exp}-icon`}
                      style={styles.expIcon}
                    />
                    <p style={styles.expTitle}>{exp.exp}</p>
                    <p style={styles.expLocation}>{exp.location}</p>
                    <p style={styles.expLocation}>{exp.date}</p>
                    <p style={styles.expPostion}>{exp.position}</p>
                  </div>
                );
              })}
            </div>
          </div>
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
    width: "fit-content",
    padding: "0 20px",
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
    fontWeight: "bold",
  },
  expsContainer: {
    width: "calc(100% - 40px)",
    height: "calc(100% - 182px)",
    background: "rgba(128, 128, 128, 0.25)",
    margin: "8vh 20px 0",
    borderRadius: "5px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    maxHeight: "60vh",
  },
  expsMain: {
    height: "100%",
    width: "calc(100% - 20px)",
    margin: "0 auto",
    display: "flex",
    flexFlow: "column wrap",
    overflow: "auto",
  },
  expContainer: {
    background: "rgba(255, 255, 255, 0.13)",
    position: "relative",
    // margin: "10px 5px",
    margin: "10px auto",
    padding: "20px 10px",
    width: "calc(100% - 60px)",
    maxWidth: "300px",
    height: "calc(100% - 60px)",
    borderRadius: "5px",
  },
  expIcon: { height: "40%", display: "block", margin: "0 auto" },
  expTitle: {
    textAlign: "center",
    marginTop: "20%",
    fontSize: "35px",
    color: "white",
  },
  expLocation: {
    color: "white",
    textAlign: "center",
    fontSize: "14px",
  },
  expPostion: {
    color: "white",
    textAlign: "center",
    fontSize: "25px",
    margin: "15px 0",
  },
};

export default Experience;
