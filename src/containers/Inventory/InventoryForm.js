import React from 'react'
import { Container, Card, Col, Row, Button, Text, FormText, FormLabel, Accordion, Form, FormControl } from 'react-bootstrap'
const InventoryForm = ({
    typeId,
    onAddInventoryFieldValue,
    types,
    inventoryId,
    inventoryItem,
    onRemoveInventory
}) => {
    const renderFieldTypes = (fieldType, fieldName, fieldId) => {
        const fieldValue = inventoryItem[fieldId]
        switch (fieldType) {
            case 'TEXT': {
                return (
                    <Row className='my-1'>
                        <Col>
                            <FormLabel>{fieldName}</FormLabel>
                            <FormControl type="text" placeholder='Enter field value' value={fieldValue} onChange={e =>
                                onAddInventoryFieldValue(typeId, inventoryId, fieldId, e.target.value)
                            }
                            />
                        </Col>
                    </Row>
                )
            }
            case 'NUMBER': {
                return (
                    <Row className='my-1'>
                        <Col>
                            <FormLabel>{fieldName}</FormLabel>
                            <FormControl type="number" placeholder='Enter field value' value={fieldValue} onChange={e =>
                                onAddInventoryFieldValue(typeId, inventoryId, fieldId, e.target.value)
                            } />
                        </Col>
                    </Row>
                )
            }
            case 'LONG_TEXT': {
                return (
                    <Row className='my-1'>
                        <Col>
                            <FormLabel>{fieldName}</FormLabel>
                            <Form.Control as="textarea" placeholder='Enter field value' value={fieldValue} onChange={e =>
                                onAddInventoryFieldValue(typeId, inventoryId, fieldId, e.target.value)
                            } />
                        </Col>
                    </Row>
                )
            }
            case 'DATE': {
                return (
                    <Row className='my-1'>
                        <Col className='d-flex flex-column'>
                            <FormLabel>{fieldName}</FormLabel>
                            <input type="date" value={fieldValue} onChange={e =>
                                onAddInventoryFieldValue(typeId, inventoryId, fieldId, e.target.value)
                            } />
                        </Col>
                    </Row>
                )
            }
            default: {
                return (
                    <Row className='my-1'>
                        <Col>
                            <FormLabel>{fieldName}</FormLabel>
                            <FormControl type="text" placeholder='Enter field value' />
                        </Col>
                    </Row>
                )
            }
        }
    }

    const renderFields = () => {
        const fieldData = types[typeId].typeFields
        if (!fieldData || Object.keys(fieldData).length <= 0) return
        return <Row>
            <Col className='d-flex flex-column'>
                <Button className='d-flex align-self-end my-1' onClick={() => onRemoveInventory(typeId, inventoryId)}>Remove Item</Button>
                {
                    Object.keys(fieldData).map((fieldId, _) => {
                        const { fieldName, fieldType } = types[typeId].typeFields[fieldId]
                        return renderFieldTypes(fieldType, fieldName, fieldId)
                    })
                }
            </Col>

        </Row>
    }
    const inventoryTitleField = types[typeId].typeTitleFieldId || null
    return (
        <Container className='my-2'>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>{`${types[typeId]?.typeName} - ${inventoryTitleField ? inventoryItem[inventoryTitleField] : ''} `}</Accordion.Header>
                    <Accordion.Body>
                        {renderFields()}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default InventoryForm