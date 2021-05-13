import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/**Sidebar */}
        {/**Feed */}
        {/**Widgets */}
      </div>
    </div>
  );
}

export default App;
