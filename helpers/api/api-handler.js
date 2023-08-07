import { db, errorHandler, jwtMiddleware } from "helpers/api";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
export { apiHandler };

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

function apiHandler(handler) {
  return async (req, res) => {
    const method = req.method.toLowerCase();
    //await runMiddleware(req, res, cors);

    // check handler supports HTTP method
    if (!handler[method])
      return res.status(405).end(`Method ${req.method} Not Allowed`);

    try {
      // init db if required
      if (!db.initialized) await db.initialize();

      // global middleware
      await jwtMiddleware(req, res);

      // route handler
      await handler[method](req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
}
