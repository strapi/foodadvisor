const Pricing = ({ header, pricingCards }) => {
  return (
    <div className="bg-white pb-60">
      <div className="text-center pt-24">
        {header && (
          <h2
            className={`text-${header.theme} font-extrabold tracking-wide uppercase`}
          >
            {header.label}
          </h2>
        )}

        {header && (
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {header.title}
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center items-center text-center gap-8 pb-12 pt-16 mt-4">
        {pricingCards &&
          pricingCards.map((card, index) => (
            <div
              className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4"
              key={`pricingCard-${index}`}
            >
              <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                {card.title}
              </p>
              <p className="text-gray-900 dark:text-white text-3xl font-bold">
                ${card.price}
                <span className="text-gray-300 text-sm">/ month</span>
              </p>
              <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
                {card.description}
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
                {card.perks &&
                  card.perks.map((perk, index) => (
                    <li
                      className="mb-3 flex items-center"
                      key={`perk-${index}`}
                    >
                      {perk.included ? (
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          stroke="currentColor"
                          fill="#10b981"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          className="h-6 w-6 mr-2"
                          fill="red"
                          viewBox="0 0 1792 1792"
                        >
                          <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                      )}
                      {perk.name}
                    </li>
                  ))}
              </ul>
              <button
                type="button"
                className="py-2 px-4 bg-secondary hover:bg-secondary-darker text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Choose plan
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

Pricing.defaultProps = {};

export default Pricing;
