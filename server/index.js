const server = require('./api/server');

const HOST = 'localhost';
const PORT = 3030;

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));