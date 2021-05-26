import './App.css';
import React from "react";
import Layout from "./components/layout/Layout";


function App() {
    const themes = ["lightBlue-100", "pink-50"]
  return (
    <div className="App">
      <Layout activeTheme={themes[Math.floor(Math.random() * themes.length)]}/>
    </div>
  );
}

export default App;
