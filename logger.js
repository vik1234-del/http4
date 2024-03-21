const logger = (req, res, next) => {
  console.log("Request", {
    url: req.url,
    method: req.method,
    body: req.body,
    time: new Date(),
    query: req.query,
    params: req.params,
  });
  next();
};

module.exports = logger;
