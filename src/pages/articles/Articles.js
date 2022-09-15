import React, { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Articles = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          title: vals.title,
          summary: vals.summary,
          date: vals.date,
          imageURL: vals.photoURL,
          id: doc.id,
        });
      });
      setValues(arr);
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "TITLE", width: 150 },
    {
      field: "summary",
      headerName: "Summary",
      sortable: false,
      width: 350,
    },
    { field: "date", headerName: "DATE", width: 150 },
    { field: "imageURL", headerName: "IMAGE URL", width: 260 },
  ];

  return (
    <>
      <Single
        title="ARTICLES"
        addTitle="Add a new article"
        columns={columns}
        rows={values}
      />
    </>
  );
};

export default Articles;
