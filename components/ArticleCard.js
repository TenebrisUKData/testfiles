// Author: Jdr785
import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition p-2 flex flex-col">
      <Link href={`/articles/${article.slug}`}>
        <img
          src={article.featuredImage || "/logo.png"}
          alt={article.title}
          className="rounded object-cover w-full h-32 mb-2"
        />
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="text-xs mt-1">By {article.author}</p>
      </Link>
    </div>
  );
}
