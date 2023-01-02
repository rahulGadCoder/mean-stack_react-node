import './CreateProxy.css';
import React, { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const CreateProxy = () => {
    const baseURL = 'https://api.publicapis.org/entries';

    const [proxyName, setEnteredProxyName] = useState("");
    const [desp, setDesp] = useState("");

    const proxyNameChangeHandler = (event) => {
        setEnteredProxyName(event.target.value);
    };

    const despChangeHandler = (event) => {
        setDesp(event.target.value);
    };


    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = {
            name: proxyName,
            description: desp
        }
        const postRequest = await axios.post(baseURL, formData)
        console.log(postRequest);
        setEnteredProxyName('');
        setDesp('');
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

                {/* <div className="new-expense__control">
                    <label>Upload bundle</label>
                    <input type="date" />
                </div> */}

            </div>
            <div className="new-expense__actions">
                <Button variant="success" type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default CreateProxy;