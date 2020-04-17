const express = require("express");
const PORT = process.env.PORT || 5150;
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(parser.json());
app.use(cors());

const appointmentRouter = require('./Routes/appointmentRoutes')
app.use('/appointments/', appointmentRouter) 

const providerRouter = require('./Routes/providerRoutes')
app.use('/providers/', providerRouter) 

const userRouter = require('./Routes/userRoutes')
app.use('/users/', userRouter) 

app.listen(PORT, () => console.log("Now serving you on port: ", PORT));
