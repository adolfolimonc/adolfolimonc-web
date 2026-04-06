"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const [localTime, setLocalTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    function updateTime() {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Mazatlan",
      };
      setLocalTime(now.toLocaleTimeString("en-US", options));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <Image
                src="/assets/imgs/logo-light.png"
                alt=""
                width={100}
                height={40}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact me!</h6>
              <h6 className="p-color fw-400">
                Mazatlan, Sinaloa, Mexico <br />
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:adolfolimonc@gmail.com">
                  adolfolimonc@gmail.com
                </a>
              </h6>
              <a href="tel:+526692898058" className="">
                <span className="fz-22">+52 669 289 8058</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/work">Work</Link>
                </li>
                <li className="mb-15">
                  <Link href="/capabilities">Capabilities</Link>
                </li>
                <li className="mb-15">
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Follow me!</h6>
              {/*       <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div> */}
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="www.google.com" className="hover-anim">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://github.com/adolfolimonc"
                    target="_blank"
                    className="hover-anim"
                  >
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="mt-20 fz-16 opacity-7"
              style={{ letterSpacing: "1px" }}
            >
              <span role="img" aria-label="clock" className="mr-5">
                Local Time
              </span>
              <br />
              {mounted ? (
                <span style={{ fontWeight: "bold" }}>{localTime}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 adolfolimonc
              <span className="underline main-color"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="/assets/imgs/patterns/blur1.png"
          alt=""
          width={200}
          height={200}
        />
      </div>
    </footer>
  );
}

export default Footer;
