const fs = require('fs-extra');
const Busboy = require('busboy');
require('dotenv').config();
const { PORT } =  process.env;

const postImage = (req, res) => {
  const busboy = new Busboy({ headers: req.headers });
  req.pipe(busboy);
  busboy.on('file', (fieldname, file, filename) => {
    console.log('Uploading file: ', filename);

    const fileStream = fs.createWriteStream(__basedir + '/images/' + filename);
    file.pipe(fileStream);
    fileStream.on('close', () => {
      console.log('Upload Finished: ', filename);
      res
        .status(201)
        .send(`http://localhost:${PORT}/get-image/${filename}`)
    })
  })
}

module.exports = postImage;