import React from "react";
import Image from "next/image";
import data from "@/data/services";

function Feat() {
  return (
    <section
      className="feat section-padding sub-bg bord-bottom-grd"
      id="services"
    >
      <div className="container">
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
                <span>All services</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="item-box radius-15 md-mb50">
                <div className="icon-img-70 mb-40 opacity-5">
                  <Image src={item.img} alt="" width={70} height={70} />
                </div>
                <h6 className="mb-25">{item.title}</h6>
                <p>{item.desc.slice(0, 60)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feat;
