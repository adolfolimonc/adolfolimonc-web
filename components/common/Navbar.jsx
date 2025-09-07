"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show");
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }

  function handleNavLinkClick(e, sectionId, redirectPage) {
    // Allow middle-click (scroll wheel click) to work normally
    if (e.button === 1) {
      // Middle-click - let it work normally by not preventing default
      return;
    }

    // Only handle left-click (button 0)
    if (e.button !== 0) {
      return;
    }

    e.preventDefault();

    // Always redirect to the corresponding page
    router.push(redirectPage);
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <Image
            src="/assets/imgs/logo-light.png"
            alt="logo"
            width={100}
            height={40}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            ></li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/work"
                onClick={(e) => handleNavLinkClick(e, "selected-work", "/work")}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Work</span>
              </a>
              <div className="dropdown-menu"></div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/capabilities"
                onClick={(e) =>
                  handleNavLinkClick(e, "services", "/capabilities")
                }
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Capabilities</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/about"
                onClick={(e) => handleNavLinkClick(e, "about", "/about")}
              >
                <span className="rolling-text">About</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s build!</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
