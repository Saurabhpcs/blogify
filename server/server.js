require('dotenv').config();
const express = require("express");
const app = express();
const connectDb = require("./database/db");
const blogRoute = require("./router/blog-router");
const userRoute = require("./router/user-router");
const draftRoute = require("./router/draft-router");
app.use(express.json()); 
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");


const corsOptions = {
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/blog", blogRoute);
app.use("/api/user", userRoute);
app.use("/api/drafts", draftRoute);
app.use(errorMiddleware);

// app.get("/", (req,res) => {
//     res.status(200).send('Welcome to the new project');
// });

const PORT = process.env.PORT || 5001;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDb().then(()=> {
    app.listen(PORT, ()=>{
        console.log(`Server running on port : ${PORT}`);
    });
});