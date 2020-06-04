import React, { Component } from "react";

import SkillList from "./SkillList.json";
// Superior, Advanced, Intermediate, and Novice

class Skills extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590985929/portfolio/pankaj-patel-1IW4HQuauSU-unsplash-min_doxm1f.jpg"
          alt="skills-bg"
          style={styles.bg}
        />
        <div style={styles.bgBackdrop}></div>
        <div style={styles.main}>
          <div style={styles.titleContainer}>
            <p style={styles.title}>SKILLS</p>
          </div>
          <div style={styles.skillsContainer}>
            <div
              className="horizontal-drag hide-scrollbar"
              style={styles.skillsMain}
            >
              {SkillList.map((skill) => {
                return (
                  <div key={skill.id} style={styles.skillContainer}>
                    <div style={styles.skillTable}>
                      <div style={styles.skillTextContainer}>
                        <img
                          src={skill.icon}
                          alt={`${skill.skill}-icon`}
                          style={styles.skillIcon}
                        />
                        <p style={styles.skillTitle}>{skill.skill}</p>
                        <p style={styles.skillProficiency}>
                          <span>Proficiency: </span>
                          <span
                            style={{
                              color:
                                skill.proficiency === "Superior"
                                  ? "red"
                                  : skill.proficiency === "Advanced"
                                  ? "orange"
                                  : skill.proficiency === "Intermediate"
                                  ? "yellow"
                                  : skill.proficiency === "Novice"
                                  ? "green"
                                  : "white",
                            }}
                          >
                            {skill.proficiency}
                          </span>
                        </p>
                      </div>
                    </div>
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
    minHeight: "567px",
    width: "100%",
    position: "relative",
  },
  main: {
    height: "100vh",
    minHeight: "567px",
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
    minHeight: "567px",
    objectFit: "cover",
    position: "absolute",
  },
  bgBackdrop: {
    width: "100%",
    height: "100vh",
    minHeight: "567px",
    position: "absolute",
    background: "#00000061",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  },
  titleContainer: {
    width: "fit-content",
    padding: "0 20px",
    display: "block",
    margin: "90px auto 0px",
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
  skillsContainer: {
    width: "calc(100% - 40px)",
    height: "calc(100% - 182px)",
    minHeight: "341px",
    background: "rgba(128, 128, 128, 0.25)",
    margin: "8vh 20px 0",
    borderRadius: "5px",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    maxHeight: "60vh",
  },
  skillsMain: {
    height: "100%",
    width: "calc(100% - 20px)",
    margin: "0 auto",
    display: "flex",
    flexFlow: "column wrap",
    overflow: "auto",
  },
  skillContainer: {
    background: "rgba(255, 255, 255, 0.13)",
    position: "relative",
    margin: "10px 5px",
    padding: "0 10px",
    width: "calc(100% - 60px)",
    maxWidth: "400px",
    height: "calc(100% - 20px)",
    borderRadius: "5px",
    cursor: "grab",
  },
  skillTable: {
    height: "100%",
    width: "100%",
    display: "table",
  },
  skillTextContainer: {
    display: "table-cell",
    verticalAlign: "middle",
  },
  skillIcon: { height: "120px", display: "block", margin: "0 auto" },
  skillTitle: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "38px",
    color: "white",
  },
  skillProficiency: {
    textAlign: "center",
    marginTop: "10px",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Skills;
