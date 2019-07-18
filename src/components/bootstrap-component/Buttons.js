import React from 'react'
import { ButtonToolbar, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const MakeButton = ({ variant, idx, isLoading, handleClick, loadingId }) => {
    return (
        <Button id={idx}
            size="sm"
            variant={variant}
            onClick={handleClick}
            disabled={isLoading && (idx === loadingId) && 'disabled'}
            active={idx === loadingId}
        >{(isLoading && (idx === loadingId)) ? 'Loading...' : variant}</Button>
        // <Button variant={variant}>{variant}</Button>
    )
}

const Buttons = ({ defaultStyles, defaultOutLineStyles, isLoading, handleLoading, loadingId }) => {

    const toolBarStyles = {
        backgroundColor: '#f0f0f0'
    }
    const buttons = defaultStyles.map((variant, idx) => (
        <Button
            key={idx}
            variant={variant}
            size="lg"
            className={(idx === 0 && 'active')} >{variant}</Button>
    ))
    const handleClick = (e) => {
        const targetId = e.target.id;
        handleLoading(targetId);
        setTimeout(clojure(targetId, handleLoading), 2000)
    };
    const clojure = (val, callFn) => {
        // const temp = val;
        return function () {
            callFn(val);
        };
    }
    const outlineButtons = defaultOutLineStyles.map((variant, idx) => (
        <MakeButton key={idx} idx={idx} variant={variant} isLoading={isLoading} handleClick={handleClick} loadingId={loadingId} />
        // <MakeButton variant={variant} key={idx} />
    ))
    const handleChange = (value, e) => {
        console.log(value, e)
    }
    const handleChkChange = (value, e) => {
        console.log(value.length, e)
    }
    return (
        <div>
            <ButtonToolbar style={toolBarStyles}>
                {buttons}
            </ButtonToolbar>

            <ButtonToolbar style={toolBarStyles}>
                {outlineButtons}
            </ButtonToolbar>
            <ButtonToolbar>
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} onChange={handleChkChange}>
                    <ToggleButton variant='info' value={1}>no1</ToggleButton>
                    <ToggleButton variant='info' value={2}>no2</ToggleButton>
                    <ToggleButton variant='info' value={3}>no3</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange} >
                    <ToggleButton variant='outline-dark' value={1}>no1</ToggleButton>
                    <ToggleButton variant='outline-dark' value={2}>no2</ToggleButton>
                    <ToggleButton variant='outline-dark' value={3}>no3</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>

        </div>
    )
}


export default Buttons