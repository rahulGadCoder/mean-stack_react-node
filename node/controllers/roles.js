const axios = require('axios');

const auth = new google.auth.GoogleAuth({
    keyFile: './round-center-367907-712a3c9f01e4.json',
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const url = 'https://iam.googleapis.com/v1/roles';

exports.getAllRoles = async (req, res, next) => {
    try {
        const token = await auth.getAccessToken();
        const setHeader = {
            headers: { "Authorization": `Bearer ${token}` }
        }
        const roles = await axios.get(url, setHeader);
        console.log(roles);
        res.json(roles.data);
    } catch (error) {
        next(error);
    }
}