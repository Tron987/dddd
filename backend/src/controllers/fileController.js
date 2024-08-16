const File = require('../models.js/file');
const Artist = require('../models.js/artist');

exports.uploadFile = async (req, res) => {
  const { artistId, fileName, fileType, fileSha, url } = req.body;
  try {
    const file = await File.create({ artist_id: artistId, file_name: fileName, file_type: fileType, file_sha: fileSha, url });
    res.status(201).json(file);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
