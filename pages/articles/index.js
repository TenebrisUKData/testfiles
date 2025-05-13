// Author: Jakob Rose
import Header from '../../components/Header';
import MainMenu from '../../components/MainMenu';
import ArticleSlider from '../../components/ArticleSlider';
import ArticleCard from '../../components/ArticleCard';
import Footer from '../../components/Footer';
import { fetchArticles } from '../../utils/fetchArticles';

export async function getStaticProps() {
  const articles = await fetchArticles();
  return { props: { articles } };
}

export default function ArticlesPage({ articles }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto">
        <ArticleSlider articles={articles} />
        <MainMenu />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
