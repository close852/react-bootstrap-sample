import React from 'react'
import { Badge, Button } from 'react-bootstrap';

function Badges() {
    return (
        <div>
            Example heading <Badge variant='secondary'>new</Badge>
            <div>
                <Button variant="primary">
                    Profile <Badge pill variant="light">9</Badge> {/* pill : border-radius */}
                    <span className="sr-only">unread msg</span>
                </Button>
            </div>
        </div>
    )
}

export default Badges
