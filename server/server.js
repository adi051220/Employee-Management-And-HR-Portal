require('dotenv').config();
const app = require('./app.js');
const { connectToMongoDB } = require('./config/db.js');

const PORT = process.env.PORT || 5000;

connectToMongoDB(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});