const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where you want to store the uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { Name, Category, Description, Price, Quantity, rates } = req.body;
  const { filename } = req.file; // Retrieve the uploaded file's filename

  try {
    const newProduct = new Product({
      Name,
      Category,
      Description,
      Price,
      Quantity,
      rates,
      Images: filename, // Save the filename in the Images field
    });

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
  }
});
