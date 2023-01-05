import { NavLink } from 'react-router-dom';

const Policy = () => {
    return (
        <div>
            <NavLink className="btn btn-success text-right action-btn" to="/policy/create">Create Proxy</NavLink>
            <h1>Hello I'm in policy</h1>
        </div>
    )
}

export default Policy;