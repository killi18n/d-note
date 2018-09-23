const Koa = require("koa");

const proxy = require("koa-proxy");

const path = require("path");
const serve = require("koa-static");
const fallback = require("koa-connect-history-api-fallback");

const buildPath = path.join(__dirname, "../../frontend/build");

const port = 4000;

const app = new Koa();

app.use(
  proxy({
    host: "http://localhost:8000",
    match: /^\/api\/*.*/
  })
);

app.use(fallback());

app.use(serve(buildPath));

app.listen(port, () => {
  console.log("build server is running on port", port);
});
