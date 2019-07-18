import React, { Fragment } from 'react'
import { Card, Button, ListGroup, Nav } from 'react-bootstrap'
function Cards() {
    const imgSytles = {
        width: '100%',
        height: '150px',
        padding: '5px'
    }
    const cardStyles = {
        width: '18rem'
    }

    const contentLoading = (e) => {
        if (e.target.text === "Active") {
        }
        e.preventDefault();
    }
    return (
        <div>
            <Card style={cardStyles}>
                <Card.Img variant="top" src="/images/favicon.ico" style={imgSytles} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={cardStyles} className="text-center">
                <Card.Header as="h4">Featured</Card.Header>
                <ListGroup variant="flush" className="list-group-flush">
                    <ListGroup.Item>1. List </ListGroup.Item>
                    <ListGroup.Item>2. List </ListGroup.Item>
                    <ListGroup.Item>3. List </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer className="footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </Card.Footer>
            </Card>

            <Card className="bg-dark text-white ">
                <Card.Img variant="top" src="/images/favicon.ico" style={imgSytles} />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#1" onClick={contentLoading}>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#2" onClick={contentLoading}>Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" onClick={contentLoading} disabled>
                                Disabled
                  </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <CardBody />
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
const CardBody = () => {
    return (
        <Fragment>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
        </Card.Text>

        </Fragment>

    )
}

export default Cards
