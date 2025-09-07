import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className="services-inline section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">Capabilities</h6>
              <h2>I turn purpose into bold digital presence.</h2>
              <a
                href="/capabilities"
                className="butn-crev d-flex align-items-center mt-30"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">See more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item d-flex align-items-center">
              <span className="num">01</span>
              <div>
                <span className="sub-title main-color mb-10">Business</span>
                <h2>
                  Digital <span className="fw-200">Presence</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/capabilities">
                  See more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
            <div className="item d-flex align-items-center">
              <span className="num">02</span>
              <div>
                <span className="sub-title main-color mb-10">Digital</span>
                <h2>Development</h2>
              </div>
              <div className="ml-auto">
                <a href="/capabilities">
                  See more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
            <div className="item d-flex align-items-center">
              <span className="num">03</span>
              <div>
                <span className="sub-title main-color mb-10">Design</span>
                <h2>
                  Graphic <span className="fw-200">Design</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/capabilities">
                  See more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
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
    </section>
  );
}

export default Services;
