"use client";
import initIsotope from "@/common/initIsotope";
import React, { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import projects from "../../data/projects.json";
import Link from "next/link";

function Portfolio() {
  useEffect(() => {
    initIsotope();
  }, []);

  // Extract unique categories for filters
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">Discover</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span
                  data-filter="*"
                  className="active"
                  data-count={projects.length}
                >
                  All
                </span>
                {categories.map((cat) => (
                  <span
                    key={cat}
                    data-filter={`.${cat}`}
                    data-count={
                      projects.filter((p) => p.category === cat).length
                    }
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container radius-15">
        <div className="gallery row md-marg">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-6 items ${project.category}`}
              data-filter={`.${project.category}`}
            >
              <Link
                href={`/work/${project.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="item mb-50">
                  <div className="img">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      className="radius-15"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="cont d-flex align-items-end mt-30">
                    <div>
                      <span className="p-color mb-5 sub-title">
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </span>
                      <h6>
                        {project.title} • {project.subTitle}
                      </h6>
                    </div>
                    <div className="ml-auto radius-15">
                      <span className="ti-arrow-top-right"></span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
