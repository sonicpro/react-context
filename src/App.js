import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/posts" element={<Posts />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  );
}
