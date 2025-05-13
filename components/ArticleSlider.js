// Author: Jdr785
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleSlider({ articles }) {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    // Shuffle articles
    setRandomArticles([...articles].sort(() => 0.5 - Math.random()).slice(0, 6));
  }, [articles]);

  return (
    <div className="w-full overflow-x-auto flex space-x-4 py-4">
      {randomArticles.map(article => (
        <div key={article.slug} className="min-w-[220px]">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
}
