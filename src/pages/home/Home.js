import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="wrapper">
          <Link
            to="/appreciations"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1520853504280-249b72dc947c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="avatar"
              />
              <p className="title">Appreciations</p>
            </div>
          </Link>
          <Link
            to="/books"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="avatar"
              />
              <p className="title">Books</p>
            </div>
          </Link>
          <Link
            to="/shortSayings"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1587135991058-8816b028691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="avatar"
              />
              <p className="title">Short Sayings</p>
            </div>
          </Link>
          <Link
            to="/newsFeatures"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
                className="avatar"
              />
              <p className="title">News features</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
