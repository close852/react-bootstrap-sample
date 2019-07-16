import React, { Fragment } from 'react'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function Alerts({ defaultStyles }) {
    // const alerts = defaultStyles.map((variant, idx) => (
    //     <Alert key={idx} variant={variant}>{variant} color</Alert>
    // ))

    const alertLinks = defaultStyles.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            This is a {variant} <Alert.Link href="#">an example link</Alert.Link>.
        </Alert>
    ))

    const show = true;
    // const handleCosed = () => {
    //     return setShow;
    // }
    // const alertHead = (
    //     <Alert variant="success">
    //         <Alert.Heading>Hey, nice to see You</Alert.Heading>
    //         content...
    //         <hr />
    //         content2...
    //     </Alert>
    // )
    const alertDisMissible = (
        <Alert variant="danger" dismissible>
            <Alert.Heading>Oops! Try Again.</Alert.Heading>
            <p>
                blah, blah....
            </p>
        </Alert >
    )

    return (
        <Fragment>
            <div>
                {alertDisMissible}
                {alertLinks}
            </div>
        </Fragment>
    )
}

export default Alerts
