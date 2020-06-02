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
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988344/bg1.2_lpvjlv_idzlim.jpg"
          alt="about-bg"
          style={styles.bg}
        ></img>
        <img
          data-depth="0.2"
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988344/bg1.2_lpvjlv_idzlim.jpg"
          alt="about-bg"
          style={styles.bg}
        ></img>
        <img
          data-depth="0.6"
          src="https://res.cloudinary.com/dxdwckvxy/image/upload/v1590988737/bg3_zeilgu_atuh4m.png"
          alt="about-bg"
          style={styles.bg}
        ></img>

        <div
          className="name-container"
          data-depth="0.2"
          style={styles.nameContainer}
        >
          <div style={styles.nameMain}>
            <div style={styles.myImageContainer}>
              <div style={styles.myImageMain}>
                <img
                  src="https://www.aalforum.eu/wp-content/uploads/2016/04/profile-placeholder.png"
                  alt="me"
                  style={styles.myImage}
                />
              </div>
            </div>
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
              text="Developer/Programmer"
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
    width: "100%",
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100vh",
    background: "#2525256e",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
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
    width: "calc(100vw - 10%)",
    height: "100vh",
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
    WebkitBackdropFilter: "blur(2px)",
    padding: "3px 10px",
    color: "white",
    fontSize: "22px",
  },
  myImageContainer: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background: "#ffffff57",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
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