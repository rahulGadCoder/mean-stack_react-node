import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './ProxiList.css';
import axios from 'axios';

// const baseURL = "http://localhost:3001/proxies";
const baseURL = 'https://api.publicapis.org/entries';

const ProxyList = () => {

    const [proxies, setProxies] = useState([]);
    const getProxies = async () => {
        const { data } = await Axios.get(baseURL);
        const proxies = data.entries;
        console.log(proxies);
        setProxies(proxies);
    }
    useEffect(() => {
        getProxies();
    }, []);

    const onDeleteClick = async (event) => {
        const deleteRequest = await axios.delete(baseURL + '/' + event);
        console.log(deleteRequest);
        // setStatus('Delete successful');
    }

    const onViewClick = async (event) => {
        const getProxy = await Axios.get(baseURL + '/' + event);
        console.log(getProxy);
    }

    return (
        <div>
            <div>
                {/* <Button variant="success" onClick={()=>navigate('/')}>Create Proxy</Button> */}
                <Button variant="success">Proxy</Button>
            </div>
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Proxy Name</th>
                        <th>Proxy Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {proxies.map((val, key) => {
                    return (
                        <tbody>
                            <tr key={key}>
                                <td>{val.API}</td>
                                <td>{val.Description}</td>
                                <td className='btn-td'>
                                    <Button variant="danger" onClick={() => onDeleteClick(val.API)}>delete</Button>
                                    <Button className='btn-td-2' variant="success" onClick={() => onViewClick(val.API)}>view</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}

export default ProxyList;