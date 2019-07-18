import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

function Accordions() {
    // 기본 동작 키 설정 가능( 처음부터 열어놓을 accordion)
    const defaultActiveKey = '0';

    //useAccordionToggle 커스텀 토글... 레퍼런스 부족
    return (
        <div>
            <Accordion defaultActiveKey={defaultActiveKey}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant='outline-warning' eventKey='0'>
                            Click Me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-warning" eventKey="1">
                            Click Me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default Accordions
