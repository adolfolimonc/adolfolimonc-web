'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import projects from '@/data/projects.json';

function Next({ project }) {
  const [similarProjects, setSimilarProjects] = useState([]);

  useEffect(() => {
    loadBackgroudImages();
    
    // Find similar projects based on tags
    if (project && project.tags) {
      let similar = projects
        .filter(p => p.slug !== project.slug) // Exclude current project
        .filter(p => {
          // Check if any tags match
          return p.tags && p.tags.some(tag => 
            project.tags.includes(tag)
          );
        })
        .slice(0, 2); // Get only 2 similar projects
      
      // If no similar projects found, get 2 random projects
      if (similar.length === 0) {
        const availableProjects = projects.filter(p => p.slug !== project.slug);
        // Shuffle and get first 2
        similar = availableProjects
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);
      }
      
      setSimilarProjects(similar);
    }
  }, [project]);

  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
                     {similarProjects.length > 0 && (
             <>
               <div className="col-md-6 rest">
                 <div
                   className="text-left box bg-img"
                   data-background={similarProjects[0]?.thumbnail || "/assets/imgs/works/3/1.jpg"}
                 >
                   <div className="cont d-flex align-items-center">
                     <div>
                       <span className="mr-30 fz-30 ti-arrow-left"></span>
                     </div>
                     <div>
                       <h6 className="sub-title fz-16 mb-5">Similar Project</h6>
                       <Link href={`/work/${similarProjects[0]?.slug}`} className="fz-40 fw-600 stroke">
                         {similarProjects[0]?.title || "Project"}
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
               {similarProjects[1] && (
                 <div className="col-md-6 rest">
                   <div
                     className="text-right d-flex box bg-img"
                     data-background={similarProjects[1]?.thumbnail || "/assets/imgs/works/3/2.jpg"}
                   >
                     <div className="ml-auto">
                       <div className="cont d-flex align-items-center">
                         <div>
                           <h6 className="sub-title fz-16 mb-5">Similar Project</h6>
                           <Link href={`/work/${similarProjects[1]?.slug}`} className="fz-40 fw-600 stroke">
                             {similarProjects[1]?.title || "Project"}
                           </Link>
                         </div>
                         <div>
                           <span className="ml-30 fz-30 ti-arrow-right"></span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )}
             </>
           )}
        </div>
      </div>
      <div>
        <Link href="/work" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </Link>
      </div>
    </section>
  );
}

export default Next;
