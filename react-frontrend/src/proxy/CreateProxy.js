import './CreateProxy.css';
import React, { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const CreateProxy = () => {
    const baseURL = "http://localhost:3001/proxies/fileUpload";

    const [proxyName, setEnteredProxyName] = useState("");
    const [desp, setDesp] = useState("");
    const [fileList, setFileList] = useState([]);

    const proxyNameChangeHandler = (event) => {
        setEnteredProxyName(event.target.value);
    };

    const despChangeHandler = (event) => {
        setDesp(event.target.value);
    };


    const fileChangeHandler = (event) => {
        setFileList(event.target.files);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        let fileListData = [];
        for (let i = 0; i < fileList.length; i++) {
            formData.append("file", fileList[i]);
        }

        formData.append('proxyName', proxyName)
        const postRequest = await axios.post(baseURL, formData)
        console.log(postRequest);
        setEnteredProxyName('');
        setDesp('');
        setFileList([]);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type="text" value={proxyName} onChange={proxyNameChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type="text" value={desp} onChange={despChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>File</label>
                    <input id='fileUpload' name="file" type='file' multiple onChange={fileChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <Button variant="success" type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default CreateProxy;