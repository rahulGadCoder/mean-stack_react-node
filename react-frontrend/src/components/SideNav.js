import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProxyList from '../proxy/ProxiList';
import CreateProxy from '../proxy/CreateProxy';

const SideNav = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Proxies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Apps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="four">Deployment</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<div>Home Page</div>}>
                            </Route>
                        </Routes>
                    </BrowserRouter> */}
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ProxyList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <CreateProxy />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                        </Tab.Pane>
                    </Tab.Content>


                </Col>
            </Row>
        </Tab.Container>
    );

}

export default SideNav;