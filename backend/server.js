import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
const PORT=process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => {
    //root route http://localhost:3131/
    res.send("Hello World!!");
});




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));