const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const DATA_FILE = path.join(__dirname, 'photos.json');

// Create files/folders if missing
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

const readPhotos = () => {
  try {
    const raw = fs.readFileSync(DATA_FILE);
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading photos.json:", err.message);
    return [];
  }
};

const writePhotos = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Upload photo
app.post('/api/photos', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const photos = readPhotos();
  const newPhoto = {
    id: Date.now(),
    name: req.file.originalname,
    url: `/uploads/${req.file.filename}`,
  };
  photos.push(newPhoto);
  writePhotos(photos);
  res.status(201).json(newPhoto);
});

// Get photos (with search + pagination)
app.get('/api/photos', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;

  const photos = readPhotos();
  const filtered = photos.filter(photo =>
    photo.name.toLowerCase().includes(q)
  );

  const paginated = filtered.slice((page - 1) * limit, page * limit);
  res.json({ total: filtered.length, photos: paginated });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
