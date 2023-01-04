const express = require('express');
const bodyParser = require('body-parser');
const proxiesRoutes = require('./routes/proxies');
const cors = require('cors')
// const router = express.Router();

const app = express();
app.use(bodyParser.json());
const port = 3001;


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.use('/proxies', proxiesRoutes);


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

