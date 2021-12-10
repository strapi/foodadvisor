const Stars = ({ reviews }) => {
  const notes = reviews.map((review) => review.attributes.note);
  const average = Math.floor(notes.reduce((a, b) => a + b, 0) / reviews.length);

  return (
    <>
      {[...Array(5).keys()].map((index) =>
        average <= index ? (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-secondary"
            viewBox="0 0 24 24"
            key={`reviewStar-${index}`}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        ) : (
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 text-secondary"
            viewBox="0 0 24 24"
            key={`reviewStar-${index}`}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        )
      )}
    </>
  );
};

export default Stars;
