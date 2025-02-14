import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();

const app = express();
const PORT=process.env.SERVER_PORT || 5000;

//MIDDLEWARE
app.use(express.json()); //parse json data from (req.body). MUST COME BEFORE ROUTES

//ROUTES
app.use("/api/auth", authRoutes);


/* app.get("/", (req, res) => {
    //root route http://localhost:3131/
    res.send("Hello Worlds!!");
});
 */


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});