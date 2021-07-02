var faker = require('faker');

console.log(
  faker.fake(
    '{{internet.userName}} - {{internet.password}} - {{internet.email}} - {{name.jobTitle}} - {{company.companyName}}'
  )
);
