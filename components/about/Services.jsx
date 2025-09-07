import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Featured</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">Capabilities</span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/capabilities"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">Business</span>
                  <h2>
                    Brand <span className="fw-200">Strategy</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>Listening deeply to build brands your people love.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <Image
                  src="/assets/imgs/serv-img/1.jpg"
                  alt=""
                  width={400}
                  height={300}
                />
                <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">Dgital</span>
                  <h2>
                    UX/UI <span className="fw-200">Design</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>Designing interfaces that serve, guide, and connect.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <Image
                  src="/assets/imgs/serv-img/1.jpg"
                  alt=""
                  width={400}
                  height={300}
                />
                <a href="/capabilities">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Digital</span>
                  <h2>
                    Web & app <span className="fw-200">Development</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Crafting seamless sites from vision to final line of code.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <Image
                  src="/assets/imgs/serv-img/2.jpg"
                  alt=""
                  width={400}
                  height={300}
                />
                <a href="/capabilities">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">04</span>
                <div>
                  <span className="sub-title main-color mb-10">Marketing</span>
                  <h2>
                    Content <span className="fw-200">Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>Creating scroll-stopping visuals that move with purpose.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <Image
                  src="/assets/imgs/serv-img/3.jpg"
                  alt=""
                  width={400}
                  height={300}
                />
                <a href="/capabilities">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
