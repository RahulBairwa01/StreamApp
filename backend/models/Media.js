const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the user model
    },
    name: {
      type: String,
      required: true,
    },
    Shorts:{
      type: Boolean,
    },
    Subscription:{
      type: Boolean,
    },
    Library:{
      type: Boolean,
    },
    History:{
      type: Boolean,
    },
    Trending:{
      type: Boolean,
    },
    Shoping:{
      type: Boolean,
    },
    Music:{
      type: Boolean,
    }, 
    Movie:{
      type: Boolean,
    }, 
    Live:{
      type: Boolean,
    }, 
    Gaming:{
      type: Boolean,
    }, 
    News:{
      type: Boolean,
    },
    Sports:{
      type: Boolean,
    },
    Learning:{
      type: Boolean,
    },
    Fashion:{
      type: Boolean,
    },
    videos: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("Media", MediaSchema);