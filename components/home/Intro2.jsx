"use client";
import React from "react";
import Image from "next/image";

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <Image
                src="/assets/imgs/plan.png"
                alt=""
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">
                  Why work with me?
                </h6>
                <h3>
                  The creative process behind starts with purpose—and ends with
                  impact.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Discovery sessions</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      A deep dive into your business, goals, and vision —so
                      every design decision starts with truth.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Insights into impact</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Together, we turn insight into impact—co-creating digital
                      experiences that truly connect.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Delightful experiences</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We build digital experiences your tribe will love—and your
                      vision will be proud of.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
