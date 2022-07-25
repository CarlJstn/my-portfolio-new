import React, { Component } from "react";
import Parallax from "parallax-js";

class Landing extends Component {
  componentDidMount() {
    const scene = document.getElementById("scene");
    new Parallax(scene);

    const type = document.getElementsByClassName("typing-effect");
    const typingEffect = [...type];

    typingEffect.map((type) => {
      const text = type.getAttribute("text");
      if (text) {
        let ctr = 0;
        const speed = 60;

        typeWriter();
        function typeWriter() {
          if (ctr < text.length) {
            type.innerHTML += text.charAt(ctr);
            ctr++;
            setTimeout(typeWriter, speed);
          }
        }
      }
      return 0;
    });
  }
  render() {
    return (
      <div id="scene" style={styles.main}>
        <div style={styles.overlay}></div>
        <img
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988344/portfolio/bg1.2_lpvjlv_idzlim.jpg"
          alt="about-bg"
          style={styles.bg}
        ></img>
        <img
          data-depth="0.2"
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988344/portfolio/bg1.2_lpvjlv_idzlim.jpg"
          alt="about-bg"
          style={styles.bg}
        ></img>
        <img
          data-depth="0.6"
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988737/portfolio/bg3_zeilgu_atuh4m.png"
          alt="about-bg"
          style={styles.bg}
        ></img>

        <div
          className="name-container"
          data-depth="0.2"
          style={styles.nameContainer}
        >
          <div style={styles.nameMain}>
            {/* <div style={styles.myImageContainer}>
              <div style={styles.myImageMain}>
                <img
                  src="https://avatars0.githubusercontent.com/u/46716872?s=400&v=4"
                  alt="me"
                  style={styles.myImage}
                />
              </div>
            </div> */}
            <p
              className="name typing-effect"
              style={styles.name}
              text="CARL JUSTINE"
            ></p>
            <p className="name typing-effect" style={styles.name} text="M."></p>
            <p
              className="name typing-effect"
              style={styles.name}
              text="DE GUZMAN"
            ></p>
            <p
              className="typing-effect"
              style={styles.title}
              text="Fullstack Developer"
            ></p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "100vh",
    minHeight: "567px",
    width: "100%",
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100vh",
    minHeight: "567px",
    background: "#2525256e",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    position: "absolute",
    zIndex: "1",
  },
  bg: {
    height: "100vh",
    minHeight: "567px",
    width: "100vw",
    objectFit: "cover",
  },
  nameContainer: {
    maxWidth: "400px",
    width: "calc(100vw - 10%)",
    height: "100vh",
    minHeight: "567px",
    zIndex: "2",
    paddingLeft: "5%",
  },
  nameMain: {
    display: "table-cell",
    verticalAlign: "middle",
  },
  name: {
    fontFamily: "'Open Sans Condensed', sans-serif",
    color: "white",
  },
  title: {
    fontFamily: '"Open Sans Condensed", sans-serif',
    background: "#ffffff47",
    padding: "3px 10px",
    color: "white",
    fontSize: "22px",
  },
  myImageContainer: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background: "#ffffff57",
    display: "table",
    margin: "0 auto",
  },
  myImageMain: {
    display: "table-cell",
    verticalAlign: "middle",
  },
  myImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
    margin: "0 auto",
  },
};

export default Landing;
