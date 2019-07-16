import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function BootStrap({ defaultStyles, defaultOutLineStyles }) {

    const toolBarStyles = {
        backgroundColor: '#f0f0f0'
    }
    const buttons = defaultStyles.map((variant, idx) => (
        <Button key={idx} variant={variant} size="lg">{variant}</Button>
    ))
    const outlineButtons = defaultOutLineStyles.map((variant, idx) => (
        <Button key={idx} variant={variant} size="sm">{variant}</Button>
    ))
    return (
        <div>
            <ButtonToolbar style={toolBarStyles}>
                {buttons}
            </ButtonToolbar>

            <ButtonToolbar style={toolBarStyles}>
                {outlineButtons}
            </ButtonToolbar>
        </div>
    )
}

export default BootStrap
