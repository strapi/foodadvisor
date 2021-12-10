import delve from 'dlv';

const OverallRating = ({ reviews }) => {
  const reviewsCount = reviews.length;

  if (reviewsCount == 0) {
    return (
      <div>
        <div className="shadow-lg rounded-xl w-full p-4 bg-white text-gray-700 text-center relative overflow-hidden">
          <div className="w-full">
            <p className="text-gray-700 dark:text-white  text-2xl font-light mb-4">
              No reviews 😥
            </p>
          </div>
        </div>
      </div>
    );
  }

  const notes = reviews.map((review) => review.attributes.note);
  const average = notes.reduce((a, b) => a + b, 0) / reviewsCount;

  const reviewNotes = [
    {
      label: 'Excellent',
      value: notes.filter((note) => note === 5).length,
    },
    {
      label: 'Good',
      value: notes.filter((note) => note === 4).length,
    },
    {
      label: 'Average',
      value: notes.filter((note) => note === 3).length,
    },
    {
      label: 'Bellow Average',
      value: notes.filter((note) => note === 2).length,
    },
    {
      label: 'Poor',
      value: notes.filter((note) => note === 1).length,
    },
  ];

  return (
    <div>
      <div className="rounded-xl w-full p-4 bg-white text-gray-700 text-center relative overflow-hidden">
        <div className="w-full">
          <p className="text-gray-700 dark:text-white  text-2xl font-light mb-4">
            Overall Rating
          </p>

          {reviewsCount && (
            <p className="text-5xl text-black dark:text-white font-bold">
              {average}/5
            </p>
          )}

          {reviewsCount && <p className="my-4">{reviewsCount} reviews</p>}

          {reviewNotes &&
            reviewNotes.map((item, index) => (
              <div key={`noteProgress-${index}`}>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <p>{delve(item, 'label')}</p>
                  <p>{delve(item, 'value')}</p>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mb-4">
                  <div
                    className={`${
                      delve(item, 'value') === 0
                        ? 'w-0'
                        : `w-${delve(item, 'value')}/${reviewsCount}`
                    }  h-full text-center text-xs text-white bg-primary rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
