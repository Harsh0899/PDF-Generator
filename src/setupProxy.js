const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/cast-health-engineering-dashboard-2.3.0-SNAPSHOT-637/rest/AAD/applications",
        createProxyMiddleware({
            target: "http://localhost:8000",
            changeOrigin: true,
        })
    );
};