const Media = require("../models/Media");
const fs = require('fs');
const path = require('path');

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getShorts = async (req, res) => {
  try {
    const media = await Media.find({ Shorts: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getSubscription = async (req, res) => {
  try {
    const media = await Media.find({ Subscription: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getLibrary = async (req, res) => {
  try {
    const media = await Media.find({ Library: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getHistory = async (req, res) => {
  try {
    const media = await Media.find({ History: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getTrending = async (req, res) => {
  try {
    const media = await Media.find({ Trending: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getShoping = async (req, res) => {
  try {
    const media = await Media.find({ Shoping: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getMusic = async (req, res) => {
  try {
    const media = await Media.find({ Music: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getMovie = async (req, res) => {
  try {
    const media = await Media.find({ Movie: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getLive = async (req, res) => {
  try {
    const media = await Media.find({ Live: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getGaming = async (req, res) => {
  try {
    const media = await Media.find({ Gaming: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getNews = async (req, res) => {
  try {
    const media = await Media.find({ News: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getSports = async (req, res) => {
  try {
    const media = await Media.find({ Shorts: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getLearning = async (req, res) => {
  try {
    const media = await Media.find({ Learning: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.getFashion = async (req, res) => {
  try {
    const media = await Media.find({ Fashion: true });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getMediaByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const media = await Media.find({ user: userId });
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Backendurl/public/videos/file_name.mp4
exports.create = async (req, res) => {
  const user = req.user.id; // Get the user's ID from the request
  let success = false;
  const {name,Shorts,Subscription,Library,History,Trending,Shoping,Music,Movie,Live,Gaming,News,Sports,Learning, Fashion } = req.body;
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      user,name,Shorts,Subscription,Library,History,Trending,Shoping,Music,Movie,Live,Gaming,News,Sports,Learning,Fashion,
      videos: videosPaths,
    });
    success = true;
    res.json({ message: "Media created successfully",success, createdMedia });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};



exports.delete = async (req, res) => {
  const mediaId = req.params._id;

  try {
    // Find media by ID
    const media = await Media.findById(mediaId);

    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    // Delete from the database
    await Media.deleteOne({ _id: mediaId });

    // Check if the media object has videos
    if (!media.videos || media.videos.length === 0) {
      return res.status(500).json({ error: 'Media videos are missing' });
    }

    // Delete each video from the file system
    media.videos.forEach((videoFileName) => {
      const filePath = path.join(__dirname,'..', videoFileName);

      // Check if the file exists before attempting to delete
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).json({ error: 'Internal server error' });
          }
          console.log('File deleted successfully:', filePath);
        });
      }
      else {
        console.log('File does not exist:', filePath);
      }
    });
    // Success response
    res.json({ message: 'Media deleted successfully' });
  } catch (err) {
    console.error('Error deleting media:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};