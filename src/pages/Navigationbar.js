import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navigationbar = () => {
    const {
        inventoryType: {
            types
        }
    } = useSelector(state => state)
    const renderTypes = () => {
        if (!types || Object.keys(types).length <= 0) return
        return Object.keys(types).map((typeId, _) => {
            const typeName = types?.[typeId]?.typeName || ''
            return (
                <Navbar.Text key={typeId} className="mx-2">
                    <Link to={`/type/${typeId}`}>{typeName}</Link>
                </Navbar.Text>
            )
        })

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Inventory Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Text className="mx-2">
                        <Link to="/">All</Link>
                    </Navbar.Text>
                    {renderTypes()}
                    <Navbar.Text className="mx-2">
                        <Link to="/types">Manage Type</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigationbar