const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user model
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media', // Reference to the media model (or your media model's name)
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const History = mongoose.model('History', HistorySchema);

module.exports = History;