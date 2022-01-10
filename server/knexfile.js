// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/vegedb.sqlite3'
      // filename: './api/todo.db3'
    },
    // migrations: {
    //   directory: './api/migrations'
    // },
    // seeds: {
    //   directory: './api/seeds'
    // },
      useNullAsDefault: true,
  }
  
};
