const qs = require("qs");

const query = qs.stringify(
  {
    populate: {
      blocks: {
        populate: {
          team: "members",
        },
      },
    },
  },
  {
    encode: false,
  }
);
console.log(query);
