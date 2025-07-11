import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Pages, Services, Shop } from "./Menu";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${
        mobileTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li>
              <Link href="/">
                <a>
                  Home
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("home")}
                  >
                    <i className="fas fa-angle-down" />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu" style={activeLi("home")}>
                <Home />
              </ul>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/doctor">
                <a>
                  Products
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("products")}
                  >
                    <i className="fas fa-angle-down" />
                  </span>
                </a>
              </Link>
              <ul className="sub-menu" style={activeLi("products")}>
                <Doctor />
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">Faq</Link>
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
