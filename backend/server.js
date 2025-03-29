require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");

// Middleware to parse JSON requests
app.use(express.json());

// Define CORS options
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS", 
    credentials: true 
};

app.use(cors(corsOptions));

// Apply the contact form routes
app.use("/api/form", contactRouter);


const PORT = process.env.PORT || 5001;


connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`http://localhost:${PORT}/api/form`);
  });
});
