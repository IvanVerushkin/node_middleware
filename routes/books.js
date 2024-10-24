const express = require("express");
const router = express.Router();
const fileMulter = require('./../file')
let books = [];

router.get("/", function(req, res) {
	res.status(201).json({ books });
});

router.post("/:id/:title/:description/:authors/:favorite/:fileCover/:fileName/:fileBook", (req, res) => {
	let data = {
		book: {
			id: req.params.id.toString(),
			title: req.params.title.toString(),
			description: req.params.description.toString(),
			authors: req.params.authors.toString(),
			favorite: req.params.favorite.toString(),
			fileCover: req.params.fileCover.toString(),
			fileName: req.params.fileName.toString(),
			fileBook: req.params.fileBook.toString(),
		}
	};
	books.push(data);
	res.status(200).json(data);
});

router.post('/upload',
  fileMulter.single('book'),
  (req, res) => {
    if (req.file) {
      const {path} = req.file
      res.json({path})
    }
    res.json()
  }
)

module.exports = router;