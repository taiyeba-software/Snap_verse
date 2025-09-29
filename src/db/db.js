const mongoose = require('mongoose');

const connectBD = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB error:", err));
};

module.exports = connectBD;
