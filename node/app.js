const express = require('express');
const bodyParser = require('body-parser');
const proxiesRoutes = require('./routes/proxies');

const multer = require('multer')({ dest: 'uploads/' });
const FormData = require('form-data');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
const port = 3001;


app.use('/proxies', proxiesRoutes)

// app.post('/fileUpload' , multer.single('fileFieldName'), (req , res) => {
//     const fileRecievedFromClient = req.file;
//     let form = new FormData();
//     form.append('fileFieldName', fileRecievedFromClient.buffer, fileRecievedFromClient.originalname);
//     axios.post('https://apigee.googleapis.com/v1/organizations/fiserv-skeleton/apis', form, {
//             headers: {
//                 'Content-Type': `multipart/form-data; boundary=${form._boundary}`
//             }
//         }).then((resp) => {
//             res.send("SUCCESS")
//         }).catch((err) => {
//             res.send("ERROR")
//         })
// })

app.listen(port, () => {
    console.log('Listen the port', port);
});

