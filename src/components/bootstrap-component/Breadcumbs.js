import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
function Breadcumbs() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>Library</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Breadcumbs
