const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/userRoute');
const movieRouter = require('./routes/movieRoute');
const listRouter = require('./routes/listRoute');

const app = express();
dotenv.config();

const port = process.env.PORT || 8080;

// Middleware
app.use(express.json({ extended: true }));
app.use(cors());
app.options('*', cors());

// Routes
app.get('/', (req, res) => res.send('Hello from Netflix API'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/movie', movieRouter);
app.use('/api/list', listRouter);

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
