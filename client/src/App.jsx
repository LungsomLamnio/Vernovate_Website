import React from "react";
import Page1 from "./design/Page1";
import Page3 from "./design/Page3";
import Page7 from "./design/Page7";
import Page8 from "./design/Page8";
import Page9 from "./design/Page9";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <div className="container py-4">
      {" "}
      {/* Bootstrap layout */}
      <AppNavbar />
      <Page1 />
      <Page3 />
      <Page7 />
      <Page8 />
      <Page9 />
    </div>
  );
}

export default App;
