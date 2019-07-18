import React from 'react'
import { ButtonGroup, Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap'

function ButtonGroups() {
    return (
        <div>
            <ButtonToolbar className="mb-3">
                <ButtonGroup className="mr-2" arial-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>


            </ButtonToolbar>
        </div>
    )
}

export default ButtonGroups
