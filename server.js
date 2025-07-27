const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://probaemail2023:3fOtsd4hfMz8Uy6h@cluster0.olldruk.mongodb.net/notes', { useNewUrlParser: true, useUnifiedTopology: true });

const nameSchema = new mongoose.Schema({
  name: String
});
const Name = mongoose.model('Name', nameSchema);

app.post('/api/names', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const newName = new Name({ name });
  await newName.save();
  res.json({ success: true });
});

app.listen(5000, '0.0.0.0', () => {
	console.log('Server running on http://0.0.0.0:5000');
  });
