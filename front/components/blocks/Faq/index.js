import delve from 'dlv';

const Faq = ({ title, faq }) => {
  return (
    <div className="bg-gray-100 py-40 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        {title && (
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            {title}
          </h2>
        )}
        <dl className="w-full md:w-2/3 mt-12 md:mt-0">
          {faq &&
            faq.map((item, index) => (
              <div key={`faq-${index}`}>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    {delve(item, 'question')}
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>{delve(item, 'answer')}</p>
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </div>
  );
};

Faq.defaultProps = {};

export default Faq;
