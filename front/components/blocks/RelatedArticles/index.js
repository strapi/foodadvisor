import ArticleCard from '../../pages/blog/ArticleCard';

import Header from '../../shared/Header';
import Container from '../../shared/Container';

const RelatedArticles = ({ articles }) => {
  return (
    <Container>
      <div className="bg-gray-100 my-40">
        <Header
          theme={'primary'}
          label={'I want more...'}
          title={'Related Articles'}
        />
        <div className="flex w-4/5 mx-auto py-16 ">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 pt-40 pb-12 px-4">
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
