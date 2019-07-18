import React from 'react'
import { Spinner, ButtonToolbar, Button } from 'react-bootstrap'

function Spinners() {
    return (
        <div>
            <Spinner animation="border" role="status" size="sm">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="grow" variant="primary" size="lg" />
            <Spinner animation="grow" variant="warning" size="lg" />
            <ButtonToolbar>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                </Button>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </ButtonToolbar>
        </div>
    )
}

export default Spinners
