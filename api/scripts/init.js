
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.tmp/data.db');

if (!fs.existsSync('.tmp/init-done')) {
  /**
   * Creates the first admin
   *
   * Crendentials are:
   * Email: "john@doe.com"
   * Password: "welcomeToStrapi123"
   */
  db.serialize(function () {
    db.run(`
        INSERT INTO strapi_administrator (firstname, lastname, email, password, isActive)
        VALUES ("John", "Doe", "john@doe.com", "$2a$10$RbJr4D.gFo7YKpQKOuq6feF5iDNtDNuwUwK58w2bq19as1m9ux0US", 1)
    `);

    db.run(`
        INSERT INTO strapi_users_roles (user_id, role_id)
        VALUES (1, 1)
    `);
  });

  db.close();

  fs.writeFileSync('.tmp/init-done', 'setup-at ' + Date.now());
}
