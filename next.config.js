const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        scope: "/",
        dest: "public",
        disable: process.env.NODE_ENV === "development",
    },
});
