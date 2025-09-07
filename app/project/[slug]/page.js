import projects from "@/data/projects.json";
import Image from "next/image";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{project.title}</h1>
      <h3>Category: {project.category}</h3>
      <Image
        src={project.thumbnail}
        alt={project.title}
        style={{ maxWidth: 400, borderRadius: 12 }}
        width={400}
        height={300}
      />
      <div style={{ marginTop: 20 }}>
        <strong>Tags:</strong> {project.tags && project.tags.join(", ")}
      </div>
    </div>
  );
}
