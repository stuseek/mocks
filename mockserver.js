const http = require("http");
const mockserver = require("mockserver");

http.createServer(mockserver("mocks", { verbose: true })).listen(80);
