import fs from 'fs';
import path from 'path';
import ProjectLayout from '@/components/work-details/ProjectLayout';
import generateStylesheetsObject from '@/common/generateStylesheetsObject';
import projects from '@/data/projects.json';

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  
  // Check if project exists and has required properties
  if (!project || !project.title) {
    return {
      title: 'Project Not Found • adolfolimonc',
      icons: {
        icon: '/assets/imgs/favicon.ico',
        shortcut: '/assets/imgs/favicon.ico',
        other: generateStylesheetsObject([
          '/assets/css/plugins.css',
          '/assets/css/style.css',
        ]),
      },
    };
  }

  return {
    title: `${project.title}: ${project.subTitle || 'Project'} • adolfolimonc — Designer Web Developer`,
    icons: {
      icon: '/assets/imgs/favicon.ico',
      shortcut: '/assets/imgs/favicon.ico',
      other: generateStylesheetsObject([
        '/assets/css/plugins.css',
        '/assets/css/style.css',
        // add fonts if you want
      ]),
    },
  };
}

export default function ProjectPage({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'work', `${params.slug}.json`);
  let project = null;

  try {
    // Check if file exists first
    if (!fs.existsSync(filePath)) {
      return <div>Project not found</div>;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    project = JSON.parse(fileContents);
    
    // Validate project has required properties
    if (!project || !project.title) {
      return <div>Invalid project data</div>;
    }
  } catch (err) {
    console.error('Error loading project:', err);
    return <div>Project not found</div>;
  }
  
  return <ProjectLayout project={project} />;
}


export async function generateStaticParams() {
  try {
    const dirPath = path.join(process.cwd(), 'data', 'work');
    
    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      console.warn('Work directory does not exist:', dirPath);
      return [];
    }
    
    const files = fs.readdirSync(dirPath);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => ({ slug: file.replace('.json', '') }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
