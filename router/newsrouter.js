const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});
const router = express.Router();
// router.get('/get',(req,res)=>{
//     res.send("Welcome to News Page")
// });

const {
  postData,
  getData,
  updateData,
  deleteData,
} = require("../controller/news");
// router.post('/post',postData)/
router.post("/post", upload.single("image"), postData);
router.get("/get", getData);
router.put("/put/:id",upload.single('image'), updateData);
router.delete("/delete/:id", deleteData);

module.exports = router;
