import React, { Component } from "react";
import { Face, Computer, WorkOutline } from "@material-ui/icons";

class Indicator extends Component {
  state = {
    active: 0,
  };

  componentDidMount() {
    this.handleIndicatorClick(0);

    var timer = null;

    window.onscroll = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;

      let active = 0;
      if (scrolled <= 33) {
        active = 0;
      } else if (scrolled > 33 && scrolled <= 66) {
        active = 1;
      } else if (scrolled > 66) {
        active = 2;
      }

      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        this.setState({ active });
      }, 100);
    };
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  handleIndicatorClick = (target) => {
    const height = window.innerHeight;
    const vhPixels = height * target + 67;
    window.scroll({
      top: vhPixels,
      behavior: "smooth",
    });

    this.setState({ active: target });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="remove-when-screen-is-too-short" style={styles.indicator}>
        <Face
          style={
            active === 0
              ? { ...styles.indicatorIcon, ...{ color: "rgb(33, 150, 243)" } }
              : styles.indicatorIcon
          }
          onClick={this.handleIndicatorClick.bind(this, 0)}
        />
        <Computer
          style={
            active === 1
              ? { ...styles.indicatorIcon, ...{ color: "rgb(33, 150, 243)" } }
              : styles.indicatorIcon
          }
          onClick={this.handleIndicatorClick.bind(this, 1)}
        />
        <WorkOutline
          style={
            active === 2
              ? { ...styles.indicatorIcon, ...{ color: "rgb(33, 150, 243)" } }
              : styles.indicatorIcon
          }
          onClick={this.handleIndicatorClick.bind(this, 2)}
        />
      </div>
    );
  }
}

const styles = {
  indicator: {
    position: "fixed",
    right: "1%",
    top: "calc(50% - 67px)",
    background: "#0000004f",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    width: "30px",
    borderRadius: "35px",
    padding: "5px",
    color: "white",
    zIndex: "1",
  },
  indicatorIcon: {
    fontSize: "24px",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    padding: "5px 0",
    margin: "0 auto",
    display: "block",
  },
};

export default Indicator;
