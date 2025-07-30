import React from "react";
import Page3 from "./design/Page3";
import Page8 from "./design/Page8";
import Page1 from "./design/Page1";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Page1 />
      <Page3 />
      <Page8 />
    </div>
  );
}

export default App;
