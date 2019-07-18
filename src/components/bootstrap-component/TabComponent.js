import React, { useState } from 'react'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap'
function TabComponent() {
    const [key, setKey] = useState('profile');
    const tabs = ['home', 'profile', 'contact'];
    const tapMap = tabs.map((key, idx) => (
        <Tab key={idx} eventKey={key} title={key}>
            <Sconnet title={key} />
        </Tab>
    ));

    const handleSelect = (key, event) => {
        setKey(key);
    }

    return (
        <div>
            <Tabs id="uncontrolled-tab-ex" transition={false} activeKey={key} onSelect={handleSelect}>
                {tapMap}
            </Tabs>
            <div>
                <Tab.Container id="left-tabs" activeKey={key} onSelect={handleSelect} >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="home">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="profile">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="h-100">
                            <Tab.Content>
                                <Tab.Pane eventKey="home">
                                    <Sconnet />
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile">
                                    <Sconnet />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

function Sconnet({ title }) {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            hi {title}
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
        </div>
    )
}
export default TabComponent
