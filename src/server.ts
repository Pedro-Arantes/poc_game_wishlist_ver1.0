import express from 'express';
import  gamesRouter  from "./routes/gamesRouter.js";

const app = express();

app.use(express.json());
app.use(gamesRouter);


const port : string | number  = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));