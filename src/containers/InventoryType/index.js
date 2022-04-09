import React from 'react'
import { Container, Table, Accordion, Button, Text, Row, Col } from 'react-bootstrap'
import InventoryTypeForm from './InventoryTypeForm'

const InventoryType = ({
    types,
    onAddInventoryTypeClick,
    onAddFieldClick,
    onRemoveFieldClick,
    onTypeNameChange,
    onTypeTitleFieldChange,
    onFeildTypeChange,
    onFeildNameChange
}) => {
    const renderForm = (item) => {
        return (
            <Col key={item} sm={12} lg={12} md={12}>
                <InventoryTypeForm
                    onAddFieldClick={onAddFieldClick}
                    onRemoveFieldClick={onRemoveFieldClick}
                    type={types[item]}
                    onTypeNameChange={onTypeNameChange}
                    onTypeTitleFieldChange={onTypeTitleFieldChange}
                    typeId={item}
                    onFeildTypeChange={onFeildTypeChange}
                    onFeildNameChange={onFeildNameChange}
                />
            </Col>

        )
    }
    return (
        <Container className='d-flex flex-column'>
            <Button className=" d-flex align-self-end my-1 " onClick={onAddInventoryTypeClick}>+ Add Type</Button>
            <Row>

                {
                    types && Object.keys(types).length !== 0 &&
                    Object.keys(types).map((item, _) => {
                        return renderForm(item)
                    })
                }

            </Row>

        </Container>
    )
}

export default InventoryType