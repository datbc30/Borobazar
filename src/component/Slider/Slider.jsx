import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


export default function Slider() {
  const location = useLocation();
  console.log(location.pathname);
  const menus = []

  return (
    <div className="Slider">
      <div className="slider-nav">
        <nav className="navbar">
          <NavLink to="/account" className="navbar-link active">
            <span className="item">
              <AccountCircleOutlinedIcon color="action" />
            </span>
            <span>
              <p>Account Settings</p>
            </span>
          </NavLink>
          <NavLink to="/oders" className="navbar-link">
            <span className="item"> 
              <ShoppingBagOutlinedIcon color="action" />
            </span>
            <span>
              <p>Orders</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <FavoriteBorderIcon color="action" />
            </span>
            <span>
              <p>Wishlist</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <FmdGoodOutlinedIcon color="action" />
            </span>
            <span>
              <p>Addess</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <NotificationsActiveOutlinedIcon color="action" />
            </span>
            <span>
              <p>Notification</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <AssignmentOutlinedIcon color="action" />
            </span>
            <span>
              <p>Legan Notice</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <PieChartOutlineOutlinedIcon color="action" />
            </span>
            <span>
              <p>Helps Center</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <SettingsOutlinedIcon color="action" />
            </span>
            <span>
              <p>Change Password</p>
            </span>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <span className="item"> 
              <LockOutlinedIcon color="action" />
            </span>
            <span>
              <p>Logout</p>
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
