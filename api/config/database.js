
const parseDbUrl = require('parse-database-url');

module.exports = ({ env }) => {
  // Parse database string into several parts
  const dbConfig = parseDbUrl(env('DATABASE_URL'));

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          database: dbConfig.database,
          username: dbConfig.user,
          password: dbConfig.password,
          schema: 'public',
          ssl: { rejectUnauthorized: false }
        },
        options: {}
      }
    }
  }
};