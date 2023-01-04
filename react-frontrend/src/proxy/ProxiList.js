import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './ProxiList.css';
import axios from 'axios';

const baseURL = "http://localhost:3001/proxies";

const ProxyList = () => {

    const [proxies, setProxies] = useState([]);
    const getProxies = async () => {
        const { data } = await Axios.get(baseURL);
        const proxies = data.proxies;
        console.log(proxies);
        setProxies(proxies);
    }
    useEffect(() => {
        getProxies();
    }, []);

    const onDeleteClick = async (event) => {
        const deleteRequest = await axios.delete(baseURL + '/' + event);
    }

    const onViewClick = async (event) => {
        const getProxy = await Axios.get(baseURL + '/' + event);
        console.log(getProxy);
    }

    return (
        <div>
            <div>
                <NavLink className="btn btn-success text-right action-btn" to="/proxies/create">Create Proxy</NavLink>
            </div>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Proxy Name</th>
                        <th>Proxy Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {proxies.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.apiProxyType}</td>
                                <td className='btn-td'>
                                    <Button variant="danger" onClick={() => onDeleteClick(val.name)}>delete</Button>
                                    <Button className='btn-td-2' variant="success" onClick={() => onViewClick(val.name)}>view</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </Table>
        </div>
    )
}

export default ProxyList;