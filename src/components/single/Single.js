import React from "react";
import Navbar from "../navbar/Navbar";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import "./single.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";

const Single = (props) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <>
      <Navbar />
      <div className="single">
        <div className="wrapper">
          <div className="top">
            <h2 className="title">{props.title}</h2>
            <div className="addIcon">
              <Link to={`/${path}/add`}>
                <AddCircleOutlineOutlinedIcon className="icon" />
              </Link>
              <p>{props.addTitle}</p>
            </div>
          </div>
          <div className="bottom">
            <DataGrid
              rows={props.rows}
              columns={props.columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              className="gridBox"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
