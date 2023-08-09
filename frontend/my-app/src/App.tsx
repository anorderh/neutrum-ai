import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Output from "./Output";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/output" element={<Output/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
