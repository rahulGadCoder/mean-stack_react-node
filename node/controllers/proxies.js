const { google } = require('googleapis');
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
const { log } = require('console');

const auth = new google.auth.GoogleAuth({
    keyFile: './fiserv-skeleton-74f49f08f229.json',
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const url = 'https://apigee.googleapis.com/v1/organizations/fiserv-skeleton/apis';


exports.getAllProxies = async (req, res, next) => {
    try {
        const token = await auth.getAccessToken();
        const setHeader = {
            headers: { "Authorization": `Bearer ${token}` }
        };
        const proxies = await axios.get(url, setHeader);
        res.json(proxies.data);
    } catch (error) {
        next(error)
    }
};

exports.createProxy = async (req, res, next) => {
    try {
        const token = await auth.getAccessToken();
        const setHeader = {
            headers: { "Authorization": `Bearer ${token}` }
        };
        const reqBody = {
            name: req.body.name,
            description: req.body.description
        }
        console.log('reqBody', reqBody);
        const proxies = await axios.post(url, reqBody, setHeader);
        res.json(proxies.data);
        console.log(proxies);

    } catch (error) {
        next(error);
    }
}

exports.deleteProxy = async (req, res, next) => {
    try {
        const token = await auth.getAccessToken();
        const setHeader = {
            headers: { "Authorization": `Bearer ${token}` }
        };
        const finalURL = url + '/' + req.params.name;
        const proxies = await axios.delete(finalURL, setHeader)
        res.json(proxies);
    } catch (error) {
        next(error);
    }
}

exports.uploadBundle = async (req, res) => {
    try {
        const token = await auth.getAccessToken();
        let form = new FormData();
        form.append('file', fs.readFileSync(req.file.path));
        const queryString = url + '?' + 'action=import' + '&name=' + req.body.proxyName;
        const setHeader = {
            headers: { "Authorization": `Bearer ${token}`, 'Content-Type': `multipart/form-data;` }
        };
        const proxies = await axios.post(queryString, form, setHeader)
        console.log(proxies)
    } catch (error) {
        console.log(error);
    }

}




