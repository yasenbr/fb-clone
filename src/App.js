import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/**Feed */}
        {/**Widgets */}
      </div>
    </div>
  );
}

export default App;
