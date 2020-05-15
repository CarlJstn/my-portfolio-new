import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ minHeight: "100vh", position: "relative" }}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
