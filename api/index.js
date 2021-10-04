const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/userRoute');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json({ extended: true }));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log('Database connected...'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
