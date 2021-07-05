const ReviewSummary = ({ reviews }) => {
  return (
    <>
      {reviews && (
        <span className="text-gray-600 ml-3">{reviews.length} Reviews</span>
      )}
    </>
  );
};

export default ReviewSummary;
