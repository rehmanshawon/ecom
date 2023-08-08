/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  serverRuntimeConfig: {
    dbConfig: {
      host: "ecom-db.cbbdsky2ogtw.ap-south-1.rds.amazonaws.com",
      //host: "dbaas-db-10344356-do-user-14451522-0.b.db.ondigitalocean.com",
      port: 3306,
      user: "admin",
      password: "ApsisINT123",
      database: "borna_db",
    },
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "https://ecom.bornaengineering.com:3000/api" // development api
        : "https//ecom.bornaengineering.com:3000/api", // production api
  },
};

module.exports = nextConfig;
