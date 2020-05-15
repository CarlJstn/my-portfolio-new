import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { GitHub, Language } from "@material-ui/icons";

import Info from "./Info";

class Project extends Component {
  state = {
    whatIDidInfoShow: false,
    whatIUseInfoShow: false,
    contributionInfoShow: false,
  };

  render() {
    const {
      whatIDidInfoShow,
      whatIUseInfoShow,
      contributionInfoShow,
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
                <Language style={styles.siteIcon} />
                <GitHub style={styles.siteIcon} />
              </div>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.detailTitle}>
                <Info
                  show={whatIDidInfoShow}
                  handleMouseOver={() =>
                    this.setState({ whatIDidInfoShow: true })
                  }
                  handleMouseOut={() =>
                    this.setState({ whatIDidInfoShow: false })
                  }
                />
                WHAT I DID:{" "}
                <span style={styles.detailText}>{project.whatIDid}</span>
              </div>
              <div style={styles.detailTitle}>
                <Info
                  show={whatIUseInfoShow}
                  handleMouseOver={() =>
                    this.setState({ whatIUseInfoShow: true })
                  }
                  handleMouseOut={() =>
                    this.setState({ whatIUseInfoShow: false })
                  }
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
                  handleMouseOver={() =>
                    this.setState({ contributionInfoShow: true })
                  }
                  handleMouseOut={() =>
                    this.setState({ contributionInfoShow: false })
                  }
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
  siteIcon: {
    margin: "0 10px",
    cursor: "pointer",
  },
};

export default Project;
