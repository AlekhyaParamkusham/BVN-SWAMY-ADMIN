import "./navbar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const navitage = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navitage("/login");
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h2>Dr. BVN SWAMY</h2>
          </Link>
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://www.nicepng.com/png/detail/772-7726577_refrubished-employee-icon-admin-assets-upload-id.png"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">
            <LogoutIcon className="icon" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
