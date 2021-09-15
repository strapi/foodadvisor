import QuestionsAnswers from './questions-answers';

const Faq = ({ title, faq, theme }) => {
  return (
    <div className={`bg-${theme} py-40 px-4`}>
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        {title && (
          <h2
            className={`mr-8 w-full md:w-1/3 text-3xl text-${theme}-text font-extrabold leading-9`}
          >
            {title}
          </h2>
        )}
        <QuestionsAnswers items={faq} theme={theme} />
      </div>
    </div>
  );
};

Faq.defaultProps = {};

export default Faq;
