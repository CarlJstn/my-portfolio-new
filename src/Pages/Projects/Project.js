import React, { Component } from "react";

import Info from "./Info";
import WebLink from "./WebLink";

class Project extends Component {
  state = {
    whatIDidInfoShow: false,
    whatIUseInfoShow: false,
    contributionInfoShow: false,
    siteInfoShow: false,
    githubInfoShow: false,
    showPercentage: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showPercentage: true }), 100);
  }

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
      showPercentage,
    } = this.state;
    const { project } = this.props;
    const contributionColor =
      project.contribution >= 80
        ? "#388E3C"
        : project.contribution >= 50
        ? "#FF7043"
        : "#D32F2F";

    return (
      <div style={styles.projBackground}>
        <img
          src={project.image}
          alt={project.imageAlt}
          style={styles.projBackgroundImage}
        />
        <div style={styles.projMain}>
          <div style={styles.projContainer}>
            {project.companyLogo && (
              <img
                src={project.companyLogo}
                alt={project.companyLogoAlt}
                style={styles.companyLogo}
              />
            )}
            <p style={styles.title}>{project.title}</p>
            <div style={styles.sitesContainer}>
              {project.website && (
                <span style={styles.webLink}>
                  <WebLink
                    show={siteInfoShow}
                    text="Link to live website."
                    link={project.website}
                    handleMouseOver={this.toggleInfo.bind(this, "siteInfoShow")}
                    handleMouseOut={this.toggleInfo.bind(this, "siteInfoShow")}
                  />
                </span>
              )}
              {project.github && (
                <span style={styles.webLink}>
                  <WebLink
                    github
                    show={githubInfoShow}
                    text="Link to github repository"
                    link={project.github}
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
              )}
            </div>
            <p style={styles.description}>{project.description}</p>
            <div style={styles.detailTitle}>
              <Info
                show={whatIDidInfoShow}
                text="In what part of project I'm assigned to."
                handleMouseOver={this.toggleInfo.bind(this, "whatIDidInfoShow")}
                handleMouseOut={this.toggleInfo.bind(this, "whatIDidInfoShow")}
              />
              ASSIGNMENT:{" "}
              <span style={styles.detailText}>{project.whatIDid}</span>
            </div>
            <div style={styles.detailTitle}>
              <Info
                show={whatIUseInfoShow}
                text="Technologies, frameworks and plugins I use while developing this project."
                handleMouseOver={this.toggleInfo.bind(this, "whatIUseInfoShow")}
                handleMouseOut={this.toggleInfo.bind(this, "whatIUseInfoShow")}
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
                text="How much work I contribute to the whole project development based on where I'm assigned."
                handleMouseOver={this.toggleInfo.bind(
                  this,
                  "contributionInfoShow"
                )}
                handleMouseOut={this.toggleInfo.bind(
                  this,
                  "contributionInfoShow"
                )}
              />
              WORK:{" "}
              <span style={styles.contribution}>
                <span
                  style={{
                    ...styles.contributionPercentage,
                    ...{
                      width: `${showPercentage ? project.contribution : 0}%`,
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
    );
  }
}

const styles = {
  projBackground: {
    height: "100vh",
    minHeight: "567px",
    display: "table",
  },
  projBackgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    minHeight: "567px",
    objectFit: "cover",
  },
  projMain: {
    display: "table-cell",
    verticalAlign: "middle",
    width: "100vw",
  },
  projContainer: {
    background: "rgba(0, 0, 0, 0.44)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
    padding: "10px 20px",
    margin: "0 auto",
    borderRadius: "5px",
    maxWidth: "1000px",
    width: "85%",
    position: "relative",
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
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "10.7px",
    transition: "width 1.5s",
  },
  sitesContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  webLink: {
    position: "relative",
  },
  companyLogo: {
    height: "30px",
    margin: "0 auto",
    display: "block",
  },
};

export default Project;
