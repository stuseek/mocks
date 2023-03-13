const http = require("http");
const mockserver = require("mockserver");

const options = {
    verbose: true,
};

http.createServer(function (req, res) {
    // Extract the origin from the Referer header
    const origin = req.headers.referer ? new URL(req.headers.referer).origin : "";
    console.log(origin)

    // Set the Access-Control-Allow-Origin header to the origin
    res.setHeader("Access-Control-Allow-Origin", origin);

    // Create the mock server with the updated options
    mockserver("mocks", options)(req, res);
}).listen(9000);

