
import ProxyList from './proxy/ProxiList';
import CreateProxy from './proxy/CreateProxy';
import { Routes, Route } from 'react-router-dom';
import Policy from './IAM/Policy';
import CreatePolicy from './IAM/CreatePolicy';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/proxies" element={<ProxyList />}></Route>
            <Route path="/proxies/create" element={<CreateProxy />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/policy/create" element={<CreatePolicy />} />
        </Routes>
    )
}

export default AppRoutes;