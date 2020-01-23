const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.tmp/data.db');

/**
 * Creates the first admin
 * 
 * Crendentials are:
 * Identifier: "admin"
 * Password: "admin"
 * Email: "john@doe.com"
 */ 
db.serialize(function () {
    db.run(`
        INSERT INTO strapi_administrator (username, email, password)
        VALUES ("admin", "john@doe.com", "$2a$10$OdZRenPhjNTlWOixGs1h7uUbxUraTrofQdTl1ybZuevhDeTo4tCDO")
    `);
});

db.close();