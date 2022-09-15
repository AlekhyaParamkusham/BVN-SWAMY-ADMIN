import React, { useEffect, useState, useLayoutEffect } from "react";
import Navbar from "./../../components/navbar/Navbar";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import "./single.scss";
import { Link, useLocation } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ShortSayings = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [values, setValues] = useState([]);

  const [size, setSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "shortsayings"));
      const itemData = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        itemData.push({
          img: vals.photoURL,
          id: doc.id,
        });
      });
      setValues(itemData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="wrapper">
          <div className="top">
            <h2 className="title">SHORT SAYINGS</h2>
            <div className="addIcon">
              <Link to={`/${path}/add`}>
                <AddCircleOutlineOutlinedIcon className="icon" />
              </Link>
              <p>Add sayings</p>
            </div>
          </div>
          <div className="bottom">
            <ImageList
              sx={
                size < 768
                  ? size <= 480
                    ? { width: 800, height: 500 }
                    : { width: 600, height: 500 }
                  : { width: 800, height: 500 }
              }
              cols={size < 768 ? (size <= 480 ? 1 : 2) : 3}
              rowHeight={164}
            >
              {values.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortSayings;
