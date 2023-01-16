const express = require('express');
const bodyParser = require('body-parser');
const proxiesRoutes = require('./routes/proxies');
const rolesRoutes = require('./routes/roles');
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

app.use('/proxies', proxiesRoutes);
app.use('/roles',rolesRoutes);


app.listen(port, () => {
    console.log('Listen the port', port);
});

