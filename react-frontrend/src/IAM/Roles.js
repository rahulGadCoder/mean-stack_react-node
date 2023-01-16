import { Axios } from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

const baseURL = "https://iam.googleapis.com/v1/roles";

const Roles = () => {
    const [roles, setRole] = useState([]);
    const getRoles = async () => {
        const { data } = await Axios.get(baseURL);
        const roles = data.roles;
        console.log(roles);
        setRole(roles);
    }

    useEffect(() => {
        getRoles();
    }, []);

    return (
        <div>
            <Table>
                <thead>
                    <th>Role Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {roles.map((val,key) =>{
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.apiProxyType}</td>
                                <td>{val.desp}</td>
                                <td>
                                    <Button>Delete</Button>
                                    <Button>View</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>

    )
}

export default Roles;