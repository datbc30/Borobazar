import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {

  const [navScroll, setnavScroll] = useState("none");
  const listenScrollEvent = () => {
    if(window.scrollY > 60) {
      setnavScroll("block")
    } else {
      setnavScroll("none");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    // return () => {
    //   window.removeEventListener("scroll", listenScrollEvent);
    // };
  }, []);

  return (
    <header className="siteHeader">
      <div className="faHeader">
        <div className="navbar-scroll" style={{display:navScroll}}>
          <div className="navbar-scroll-content">
            <div className="logo">
              <img
                src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
                alt=""
              />
            </div>
            <div className="menu">
              <div className="dropdown">
                <span className="lable">
                  Demos
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Modern</a>
                  </li>
                  <li>
                    <a href="">Classes</a>
                  </li>
                  <li>
                    <a href="">Vintage</a>
                  </li>
                  <li>
                    <a href="">Standard</a>
                  </li>
                  <li>
                    <a href="">Minimal</a>
                  </li>
                  <li>
                    <a href="">Trendy</a>
                  </li>
                  <li>
                    <a href="">Elegant</a>
                  </li>
                  <li>
                    <a href="">Refined</a>
                  </li>
                  <li>
                    <a href="">Antique</a>
                  </li>
                  <li>
                    <a href="">Antique</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Catogeris
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Fresh Vegetable</a>
                  </li>
                  <li>
                    <a href="">Diet Nutrition</a>
                  </li>
                  <li>
                    <a href="">Healthy Foods</a>
                  </li>
                  <li>
                    <a href="">Grocery Items</a>
                  </li>
                  <li>
                    <a href="">Beaf Steak</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Diatery
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Vegetarian</a>
                  </li>
                  <li>
                    <a href="">Kakogenic</a>
                  </li>
                  <li>
                    <a href="">Mediteranean</a>
                  </li>
                  <li>
                    <a href="">Oganic</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">Search</span>
                <ul className="item">
                  {/* <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li> */}
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">Shops</span>
                <ul className="item">
                  {/* <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li> */}
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Pages
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">User</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">404</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-header">
              <div className="toggle-search">
                <button className="btn-search">
                  <span className="btn-search-icons">
                    <SearchOutlinedIcon color="action"/>
                  </span>
                </button>
              </div>
              <div className="cart">
                <button className="btn-cart">
                  <span className="btn-cart-icons">
                    <Badge
                      badgeContent={0}
                      showZero
                      sx={{
                        "& .MuiBadge-badge": {
                          color: "white",
                          backgroundColor: "#02b291",
                        },
                      }}
                    >
                      <ShoppingBagOutlinedIcon color="action" />
                    </Badge>
                    <span className="cart-text">Cart</span>
                  </span>
                </button>
              </div>
              <div className="user">
                <button className="btn-user">
                  <span className="user-icons">
                    <AccountCircleOutlinedIcon color="action" />
                  </span>
                  <span className="user-text">User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="logo">
            <img
              src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
              alt=""
            />
          </div>
          <div className="search">
            <div className="search-lable" htmlFor="">
              <input
                className="search-input"
                type="text"
                placeholder="Where are you looking ..."
                style={{ width: "100%" }}
              />
              <i
                class="fa fa-search"
                aria-hidden="true"
                style={{ color: "#959597" }}
              ></i>
            </div>
          </div>
          <div className="items-header">
            <div className="language">
              <button className="btn-language">
                <span>
                  <span className="language-image">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5373/5373324.png"
                      alt="..."
                      style={{ width: "25px", height: "25px" }}
                    />
                  </span>
                  <span className="language-text">English-EN</span>
                </span>
                <span style={{ marginLeft: "4px" }}>
                  <i
                    class="fas fa-chevron-down"
                    style={{ color: "#959597" }}
                  ></i>
                </span>
              </button>
            </div>
            <div className="cart">
              <button className="btn-cart">
                <span className="btn-cart-icons">
                  <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#02b291",
                      },
                    }}
                  >
                    <ShoppingBagOutlinedIcon color="action" />
                  </Badge>
                </span>
                <span className="cart-text"> Cart</span>
              </button>
            </div>
            <div className="user">
              <button className="btn-user">
                <span className="user-icons">
                  <AccountCircleOutlinedIcon color="action" />
                </span>
                <span className="user-text">Sign In</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hiden-navbar">
          <div className="menu-nav">
            <div className="space"></div>
            <div className="menu">
              <div className="dropdown">
                <span className="lable">
                  Demos
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Modern</a>
                  </li>
                  <li>
                    <a href="">Classes</a>
                  </li>
                  <li>
                    <a href="">Vintage</a>
                  </li>
                  <li>
                    <a href="">Standard</a>
                  </li>
                  <li>
                    <a href="">Minimal</a>
                  </li>
                  <li>
                    <a href="">Trendy</a>
                  </li>
                  <li>
                    <a href="">Elegant</a>
                  </li>
                  <li>
                    <a href="">Refined</a>
                  </li>
                  <li>
                    <a href="">Antique</a>
                  </li>
                  <li>
                    <a href="">Antique</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Catogeris
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Fresh Vegetable</a>
                  </li>
                  <li>
                    <a href="">Diet Nutrition</a>
                  </li>
                  <li>
                    <a href="">Healthy Foods</a>
                  </li>
                  <li>
                    <a href="">Grocery Items</a>
                  </li>
                  <li>
                    <a href="">Beaf Steak</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Diatery
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">Vegetarian</a>
                  </li>
                  <li>
                    <a href="">Kakogenic</a>
                  </li>
                  <li>
                    <a href="">Mediteranean</a>
                  </li>
                  <li>
                    <a href="">Oganic</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">Search</span>
                <ul className="item">
                  {/* <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li> */}
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">Shops</span>
                <ul className="item">
                  {/* <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li>
                  <li><a href="">opstion</a></li> */}
                </ul>
              </div>
              <div className="dropdown">
                <span className="lable">
                  Pages
                  <a href="" className="hvr-icon-spin">
                    <i
                      class="fas fa-chevron-down hvr-icon"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </a>
                </span>
                <ul className="item">
                  <li>
                    <a href="">User</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">404</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="delivery">
              <span>
                <PlaceOutlinedIcon />
              </span>
              <span>Delivery :</span>
              <span>
                <a href="#" style={{ color: "#02b291" }}>
                  Address
                </a>
                <i
                  class="fas fa-chevron-down"
                  style={{ marginLeft: "5px" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
