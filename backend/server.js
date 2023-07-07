require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

//express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// port number
const port = process.env.PORT;

//logger
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// cookie parser
app.use(cookieParser());

// routes
app.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to the LibriNet API' }));

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server started on port ${port}`));
    })
    .catch(err => console.log(err));

app.use('/api/auth', authRouter);