const express = require("express");
const mediaController = require("../controllers/mediaController");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const fetchuser=require("../middleware/fetchuser")

//function for store media using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }
    
    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

//using multer here
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
});

const router = express.Router();

//get all media
router.get("/getmedia", mediaController.getAll);
router.get("/getshorts", mediaController.getShorts);
router.get("/getsubscription", mediaController.getSubscription);
router.get("/getlibrary", mediaController.getLibrary);
router.get("/gethistory", mediaController.getHistory);
router.get("/gettrending", mediaController.getTrending);
router.get("/getshoping", mediaController.getShoping);
router.get("/getmusic", mediaController.getMusic);
router.get("/getmovie", mediaController.getMovie);
router.get("/getlive", mediaController.getLive);
router.get("/getgaming", mediaController.getGaming);
router.get("/getnews", mediaController.getNews);
router.get("/getsports", mediaController.getSports);
router.get("/getlearning", mediaController.getLearning);
router.get("/getfashion", mediaController.getFashion);
router.get("/user", fetchuser, mediaController.getMediaByUser);
//post create new media
router.post( "/upload", fetchuser,upload.fields([
    {
      name: "videos",
      maxCount: 5,
    },
  ]),
  mediaController.create
);

router.delete("/delete/:_id",fetchuser,mediaController.delete)

module.exports = router;