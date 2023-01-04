import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../AppRoutes';

const SideNav = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <div className="nav-item">
                            <NavLink role="tab" data-rr-ui-event-key="first" id="left-tabs-example-tab-first"
                                aria-controls="left-tabs-example-tabpane-first" aria-selected="true" className="nav-link active" tabIndex="0" to="/">Home</NavLink>
                            <br/>
                            <NavLink role="tab" data-rr-ui-event-key="first" id="left-tabs-example-tab-first"
                                aria-controls="left-tabs-example-tabpane-first" aria-selected="true" className="nav-link active" tabIndex="0" to="/proxies">Proxies</NavLink>
                        </div>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <AppRoutes />
                </Col>
            </Row>
        </Tab.Container>
    );

}

export default SideNav;