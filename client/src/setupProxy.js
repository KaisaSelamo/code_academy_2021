const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      pathRewrite: {
        "^/api/": "/",
      },
    })
  );
};
<<<<<<< HEAD




=======
>>>>>>> 5d90e30baa20f1ccebb2a9df60ec554d0f121789
