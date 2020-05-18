import React, { Component } from "react";
import Parallax from "parallax-js";

class About extends Component {
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
      <div className="fade-in-easy">
        <div id="scene" style={styles.main}>
          <div style={styles.overlay}></div>
          <img
            data-depth="0.2"
            src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1589769227/bg1.2_lpvjlv.png"
            alt="about-bg"
            style={styles.bg}
          ></img>
          <img
            data-depth="0.6"
            src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1589768619/bg3_zeilgu.png"
            alt="about-bg"
            style={styles.bg}
          ></img>
          <div
            className="name-container"
            data-depth="0.2"
            style={styles.nameContainer}
          >
            <div style={styles.nameMain}>
              <p
                className="name typing-effect"
                style={styles.name}
                text="CARL JUSTINE"
              ></p>
              <p
                className="name typing-effect"
                style={styles.name}
                text="M."
              ></p>
              <p
                className="name typing-effect"
                style={styles.name}
                text="DE GUZMAN"
              ></p>
              <p
                className="typing-effect"
                style={styles.title}
                text="Developer/Programmer"
              ></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100vh",
    background: "#2525256e",
    backdropFilter: "blur(3px)",
    position: "absolute",
    zIndex: "1",
  },
  bg: {
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
  },
  nameContainer: {
    maxWidth: "400px",
    width: "100vw",
    height: "100%",
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
    backdropFilter: "blur(2px)",
    padding: "3px 10px",
    color: "white",
    fontSize: "22px",
    width: "85%",
  },
};

export default About;
