import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <section className="intro-crev section-padding pt-0">
      <div className="container">
        <div className="sec-head">
          <div className="row">
            <div className="col-lg-7 offset-lg-5">
              <h2 className="stroke">Designer</h2>
            </div>
            <div className="col-lg-10 offset-lg-2">
              <h2>&</h2>
            </div>
            <div className="col-lg-7 offset-lg-5">
              <h2 className="stroke">Developer</h2>
            </div>
          </div>
        </div>
        <div className="row md-marg align-items-end">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <Image
                src="/assets/imgs/intro/2.jpg"
                alt=""
                className="radius-15"
                width={600}
                height={800}
              />
              <div className="exp">
                <h3>4+</h3>
                <h6>
                  Years <br /> of Experience
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont">
              <p className="fz-24">
                I don’t guess—I co-create. Every project starts with a discovery
                session where we dig into your business, goals, and vision. You
                bring the insights, I turn them into a digital presence that
                reflects your purpose and moves people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
