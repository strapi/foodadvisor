import delve from 'dlv';

const Information = ({ information }) => {
  const phone = delve(information, 'location.phone');
  const address = delve(information, 'location.address');
  const website = delve(information, 'location.website');

  return (
    <div className="flex relative pb-12 ">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-white relative z-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
          Information
        </h2>
        <ul>
          {address && (
            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-start text-sm">
                <span className="mx-2">{address}</span>
              </div>
            </li>
          )}
          {website && (
            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-start text-sm">
                <span className="mx-2">{website}</span>
              </div>
            </li>
          )}
          {phone && (
            <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-start text-sm">
                <span className="mx-2">{phone}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Information;
