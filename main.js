const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
const fs = require("fs");

//Allow cors
const cors = require("cors");
//Loop of allowed origins
const allowedOrigins = ["https://dauqu-cp.vercel.app", "http://localhost:3000", "https://admin-for-all.vercel.app"];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

//Connect to database
const connectDB = require("./config/database");
connectDB();

// const fileUpload = require("express-fileupload");
// // Enable file upload using express-fileupload
// app.use(
//     fileUpload({
//         createParentPath: true,
//     })
// );

app.get("/", (req, res) => {
    //Read dir and return JSON
    fs.readdir("./storage", (err, files) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                files: files,
                files: files.map((file) => {
                    return {
                        name: file,
                        url: `http://localhost:4000/storage/${file}`,
                    };
                }),
            });
        }
    });
});

app.use("/api/v1/technologies", require("./routes/technologies"));

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
