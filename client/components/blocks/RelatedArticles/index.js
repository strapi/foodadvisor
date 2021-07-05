import Header from '../../shared/Header';
import Container from '../../shared/Container';
import ArticleCard from '../../pages/blog/ArticleCard';

const RelatedArticles = ({ header, articles }) => {
  return (
    <Container>
      <div className="bg-gray-100 my-40">
        <Header {...header} />
        <div className="w-4/5 mx-auto py-16">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 pt-12 pb-12 px-4">
            {articles &&
              articles.map((article, index) => (
                <ArticleCard {...article} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

RelatedArticles.defaultProps = {};

export default RelatedArticles;
