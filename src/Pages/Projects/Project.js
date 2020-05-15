import React, { Component } from "react";
import { Parallax } from "react-parallax";

import Info from "./Info";
import WebLink from "./WebLink";

class Project extends Component {
  state = {
    whatIDidInfoShow: false,
    whatIUseInfoShow: false,
    contributionInfoShow: false,
    siteInfoShow: false,
    githubInfoShow: false,
  };

  toggleInfo = (name) => {
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const {
      whatIDidInfoShow,
      whatIUseInfoShow,
      contributionInfoShow,
      siteInfoShow,
      githubInfoShow,
    } = this.state;
    const { project } = this.props;
    const contributionColor =
      project.contribution >= 80
        ? "#388E3C"
        : project.contribution >= 50
        ? "#FF7043"
        : "#D32F2F";

    return (
      <Parallax
        bgImage={project.image}
        bgImageAlt={project.imageAlt}
        strength={400}
      >
        <div style={styles.projBackground}>
          <div style={styles.projMain}>
            <div style={styles.projContainer}>
              <p style={styles.title}>{project.title}</p>
              <div style={styles.sitesContainer}>
                <span style={styles.webLink}>
                  <WebLink
                    show={siteInfoShow}
                    text="Link to live website."
                    handleMouseOver={this.toggleInfo.bind(this, "siteInfoShow")}
                    handleMouseOut={this.toggleInfo.bind(this, "siteInfoShow")}
                  />
                </span>

                <span style={styles.webLink}>
                  <WebLink
                    github
                    show={githubInfoShow}
                    text="Link to github repository"
                    handleMouseOver={this.toggleInfo.bind(
                      this,
                      "githubInfoShow"
                    )}
                    handleMouseOut={this.toggleInfo.bind(
                      this,
                      "githubInfoShow"
                    )}
                  />
                </span>
              </div>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.detailTitle}>
                <Info
                  show={whatIDidInfoShow}
                  text="In what part of project I'm assigned to."
                  handleMouseOver={this.toggleInfo.bind(
                    this,
                    "whatIDidInfoShow"
                  )}
                  handleMouseOut={this.toggleInfo.bind(
                    this,
                    "whatIDidInfoShow"
                  )}
                />
                WHAT I DID:{" "}
                <span style={styles.detailText}>{project.whatIDid}</span>
              </div>
              <div style={styles.detailTitle}>
                <Info
                  show={whatIUseInfoShow}
                  text="Technologies, frameworks and plugins I use while developing this project."
                  handleMouseOver={this.toggleInfo.bind(
                    this,
                    "whatIUseInfoShow"
                  )}
                  handleMouseOut={this.toggleInfo.bind(
                    this,
                    "whatIUseInfoShow"
                  )}
                />
                WHAT I USE:{" "}
                <span style={styles.detailText}>
                  {project.whatIUse.join(", ")}
                </span>
              </div>
              <div
                style={{
                  ...styles.detailTitle,
                  ...styles.contributionContainer,
                }}
              >
                <Info
                  show={contributionInfoShow}
                  text="How much work I contribute in the whole project development."
                  handleMouseOver={this.toggleInfo.bind(
                    this,
                    "contributionInfoShow"
                  )}
                  handleMouseOut={this.toggleInfo.bind(
                    this,
                    "contributionInfoShow"
                  )}
                />
                CONTRIBUTION:{" "}
                <span style={styles.contribution}>
                  <span
                    style={{
                      ...styles.contributionPercentage,
                      ...{
                        width: `${project.contribution}%`,
                        background: contributionColor,
                      },
                    }}
                  >
                    {project.contribution}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}

const styles = {
  projBackground: {
    height: "100vh",
    display: "table",
  },
  projMain: {
    display: "table-cell",
    verticalAlign: "middle",
    width: "100vw",
  },
  projContainer: {
    background: "rgba(0, 0, 0, 0.78)",
    color: "white",
    padding: "10px 20px",
    margin: "2% auto",
    borderRadius: "5px",
    maxWidth: "1500px",
    width: "85%",
  },
  title: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  detailTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "5px 0",
    position: "relative",
  },
  detailText: { fontWeight: "100" },
  description: { textAlign: "justify", marginBottom: "10px" },
  contributionContainer: {
    display: "flex",
  },
  contribution: {
    width: "50%",
    maxWidth: "200px",
    height: "15px",
    marginTop: "4px",
    marginLeft: "10px",
    borderRadius: "10px",
    border: "1px solid white",
    display: "flex",
  },
  contributionPercentage: {
    height: "15px",
    borderRadius: "10px 0 0 10px",
    textAlign: "center",
    fontSize: "10.7px",
  },
  sitesContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  webLink: {
    position: "relative",
  },
};

export default Project;
