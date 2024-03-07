const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./utils/db");
const bannnerRoute = require("./routes/banner-routes");
const authRoute = require("./routes/auth-routes");
const productRoute = require("./routes/product-routes");
const errorMiddleware = require("./middleware/error-middleware");
const adminProductRoutes = require("./routes/admin-routes/admin-product-routes");
const adminBannerRoutes = require("./routes/admin-routes/admin-banner-route");
const orderRoutes = require("./routes/order-routes");
const cors = require("cors");

// handling cors error
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,POST, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", bannnerRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/admin/product", adminProductRoutes);
app.use("/api/admin/banner", adminBannerRoutes);
app.use("/api/order", orderRoutes);

app.use(errorMiddleware);

const port = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
  });
});
