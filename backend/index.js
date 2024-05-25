const express = require("express");
const server = express();
const PORT = 5000;

server.use(require('cors'))

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
