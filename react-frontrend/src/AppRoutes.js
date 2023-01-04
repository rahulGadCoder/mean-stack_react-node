
import ProxyList from './proxy/ProxiList';
import CreateProxy from './proxy/CreateProxy';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/proxies" element={<ProxyList />}></Route>
            <Route path="/proxies/create" element={<CreateProxy />} />
        </Routes>
    )
}

export default AppRoutes;