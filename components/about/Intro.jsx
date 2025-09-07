import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="/assets/imgs/intro/i1.jpg"
                    alt=""
                    width={500}
                    height={600}
                  />
                  <div className="img-icon">
                    <Image
                      src="/assets/imgs/logo_outline.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <Image
                    src="/assets/imgs/intro/i2.jpg"
                    alt=""
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                I help purpose-driven brands
                <span className="fw-200">show up with clarity</span> and impact{" "}
                <span className="fw-200">in the digital world</span>.
              </h3>
              <p>
                Every project is a collaboration—tailor-made, strategy-led, and
                crafted to connect. I push boundaries with every build, but
                quality always leads.
              </p>
              <a href="/capabilities" className="underline main-color mt-40">
                <span className="text">
                  My Capabilities <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
