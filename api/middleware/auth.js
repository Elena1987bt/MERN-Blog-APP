const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(' ')[1];
  let decodedData;
  if (token) {
    try {
      decodedData = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = decodedData?.id;
      req.isAdmin = decodedData?.isAdmin;
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401).json('You are not authenticated!');
  }
  next();
};

module.exports = auth;
