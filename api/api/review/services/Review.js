module.exports = {
  // Get restaurant note from review's note
  average: restaurant => {
    return Review.query(function(qb) {
      qb.avg("note as note");
      qb.where("restaurant", "=", restaurant);
    })
      .fetch()
      .then(res => res.get("note"));
  }
};
