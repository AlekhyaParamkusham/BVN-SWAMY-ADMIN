import { React, useContext, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import "./add.scss";
import Navbar from "../../components/navbar/Navbar";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [name, setName] = useState("");
  const [appreciation, setAppreciation] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const data = await addDoc(collection(db, "appreciations"), {
        name,
        appreciation,
      });
      navigate(`/${path}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="add">
        <div className="wrapper">
          <h2 className="title">Add Appreciation</h2>
          <form onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Appreciation"
              onChange={(e) => setAppreciation(e.target.value)}
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
