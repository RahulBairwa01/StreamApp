const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const History = require('../models/History');

// Record a user's history
router.post('/record', fetchuser, async (req, res) => {
  try {
    const { mediaId } = req.body;
    const history = new History({ user: req.user.id, media: mediaId });
    await history.save();
    res.json({ message: 'History recorded successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Get the user's history
router.get('/get', fetchuser, async (req, res) => {
  try {
    const user = req.user.id; // Get the user's ID from the request
    const history = await History.find({ user }) // Find history entries for the user
      .populate('media')
      .sort({ timestamp: -1 });

    res.json(history);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;