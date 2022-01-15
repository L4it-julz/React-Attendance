const server = require('./api/server');

const HOST = '192.168.0.119';
const PORT = 3030;

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));