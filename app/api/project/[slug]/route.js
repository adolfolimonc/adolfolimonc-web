import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'data', 'work', `${slug}.json`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Read and parse the JSON file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const project = JSON.parse(fileContents);

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 