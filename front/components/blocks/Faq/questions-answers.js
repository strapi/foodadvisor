import delve from 'dlv';

const QuestionsAnswers = ({ items, theme }) => {
  return (
    <dl className="w-full md:w-2/3 mt-12 md:mt-0">
      {items &&
        items.map((item, index) => (
          <div key={`faq-${index}`}>
            <dt className={`mb-4 text-${theme}-text`}>
              <h3 className="text-xl font-semibold">
                {delve(item, 'question')}
              </h3>
            </dt>
            <dd className={`mb-16 text-${theme}-text`}>
              <p>{delve(item, 'answer')}</p>
            </dd>
          </div>
        ))}
    </dl>
  );
};

QuestionsAnswers.defaultProps = {};

export default QuestionsAnswers;
