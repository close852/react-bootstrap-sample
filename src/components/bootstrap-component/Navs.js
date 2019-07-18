import React, { useState, useEffect, /* useReducer */ } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
function Navs() {
    const init = 'link-0'
    const [selectId, setSelectId] = useState(init);
    // const [state, dispatch] = useReducer(reducer, initialArg, init); -- redux

    const handleNav = (selectId, event) => {
        // key를 넘겨서 axios 하면됨
        setSelectId(selectId);
    }

    useEffect(() => {
        // console.log('useEffect', selectId);
    }, [selectId])

    const navIds = ['link-0', 'link-1', 'disabled'];
    const navItems = navIds.map((value, idx) => (
        <Nav.Item key={idx}>
            <Nav.Link eventKey={value} disabled={value === 'disabled'}>{value}</Nav.Link>
        </Nav.Item>
    ))
    const navContents = navIds.map((value, idx) => (
        <div key={idx} className="w-100" style={{ display: selectId === value ? 'block' : 'none' }}>{value}</div>
    ))
    return (
        <div>
            <div className='w-50 h-50' >
                <Nav variant="tabs" defaultActiveKey="link-0" onSelect={handleNav}>
                    {navItems}
                </Nav>
                {navContents}
            </div>
            <div>
                <Nav variant="pills" defaultActiveKey="link-1" onSelect={handleNav}>
                    <Nav.Item>
                        <Nav.Link eventKey="link-0">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </div>
        </div>
    )
}

export default Navs
