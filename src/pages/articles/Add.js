import { React, useContext, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import AddAvatar from "../../images/addAvatar.png";
import "./addAr.scss";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dte, setDte] = useState("");
  const [file, setFile] = useState("");

  const handleAdd = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Create a unique image name
      const storageRef = ref(storage, title);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //create article on firestore
            await addDoc(collection(db, "articles"), {
              title,
              summary,
              date: dte,
              photoURL: downloadURL,
              // photoURL: file,
            });

            navigate("/articles");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="addAr">
        <div className="wrapper">
          <h2 className="title">Add Article</h2>
          <form onSubmit={handleAdd}>
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <img src={AddAvatar} />

              {file ? <span>{file.name}</span> : <span>Add image</span>}
            </label>

            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Summary"
              onChange={(e) => setSummary(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Date"
              onChange={(e) => setDte(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              Add
            </button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong</span>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
