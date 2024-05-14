import React, { useState } from "react";
import "./Navbar.css";
const Navbar = ({ setCategory }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="container-fluid1">
        <header className="py-2 mb-4  border-bottom">
          <span className="fs-4 logo">
            <img src="./logo.avif" alt="" />
          </span>

          <ul className="nav nav-pills mx-3 ">
            <li
              className={`nav-item ${selectedTab === "Home" && "active-item"}`}
              onClick={() => {
                setCategory("General");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Home" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Home");
                }}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Business" && "active-item"
              }`}
              onClick={() => {
                setCategory("Business");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Business" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Business");
                }}
              >
                Business
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Entertainment" && "active-item"
              }`}
              onClick={() => {
                setCategory("Entertainment");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Entertainment" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Entertainment");
                }}
              >
                Entertainment
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "General" && "active-item"
              }`}
              onClick={() => {
                setCategory("General");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "General" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("General");
                }}
              >
                General
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Health" && "active-item"
              }`}
              onClick={() => {
                setCategory("Health");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Health" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Health");
                }}
              >
                Health
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Science" && "active-item"
              }`}
              onClick={() => {
                setCategory("Science");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Science" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Science");
                }}
              >
                Science
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Sports" && "active-item"
              }`}
              onClick={() => {
                setCategory("Sports");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Sports" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Sports");
                }}
              >
                Sports
              </a>
            </li>
            <li
              className={`nav-item ${
                selectedTab === "Technology" && "active-item"
              }`}
              onClick={() => {
                setCategory("Technology");
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  selectedTab === "Technology" ? "text-white" : "text-dark"
                }`}
                onClick={() => {
                  setSelectedTab("Technology");
                }}
              >
                Technology
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
