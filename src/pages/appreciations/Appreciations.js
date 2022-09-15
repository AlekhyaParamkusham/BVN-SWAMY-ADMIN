import React, { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Appreciations = () => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "appreciations"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          name: vals.name,
          appreciation: vals.appreciation,
          id: doc.id,
        });
        // console.log(doc.id, " => ", doc.data());
      });
      setValues(arr);
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "NAME", width: 260 },
    {
      field: "appreciation",
      headerName: "APPRECIATION",
      sortable: false,
      width: 500,
    },
  ];

  return (
    <>
      <Single
        title="APPRECIATIONS"
        addTitle="Add a new appreciation"
        columns={columns}
        rows={values}
      />
    </>
  );
};

export default Appreciations;
