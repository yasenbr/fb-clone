import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";
import Login from "./component/Login";

import "./App.css";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
