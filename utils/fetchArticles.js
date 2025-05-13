// Author: Jakob Rose
import fs from 'fs';
import path from 'path';

export async function fetchArticles() {
  const articlesDir = path.join(process.cwd(), 'public', 'articles');
  const files = fs.readdirSync(articlesDir);
  return files.map(file => {
    const data = JSON.parse(fs.readFileSync(path.join(articlesDir, file)));
    return {
      ...data,
      slug: file.replace('.json', ''),
    };
  });
}
