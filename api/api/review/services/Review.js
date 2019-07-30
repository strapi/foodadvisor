module.exports = {
  // Get restaurant note from review's note
  average: (restaurant) => {
    return Review.query(function(qb) {
      qb.avg('note');
      qb.where('restaurant', '=', restaurant);
    }).fetch();
  }
};
