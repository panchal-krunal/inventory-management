import React from 'react'
import { Container, InputGroup, FormControl, Col, Row, Accordion, Dropdown, DropdownButton, FormLabel, ButtonGroup, Button } from 'react-bootstrap'

const InventoryTypeForm = ({
    onAddFieldClick,
    onRemoveFieldClick,
    onTypeNameChange,
    onFeildTypeChange,
    onTypeTitleFieldChange,
    onFeildNameChange,
    type,
    typeId
}) => {
    const FIELD_TYPES = [
        {
            name: 'Number',
            value: 'NUMBER'
        },
        {
            name: 'Text',
            value: 'TEXT'
        },
        {
            name: 'Long Text',
            value: 'LONG_TEXT'
        },
        {
            name: 'Date',
            value: 'DATE'
        }
    ]
    const renderObjectType = () => {
        return (
            <Col>
                <FormLabel>Object Type</FormLabel>
                <FormControl placeholder='Object type' value={type?.typeName || ''} onChange={e => onTypeNameChange(typeId, e.target.value)} />
            </Col>
        )
    }
    const renderObjectTitleField = () => {
        const typeFields = type?.typeFields
        return (
            <Col className='d-flex flex-column'>
                <FormLabel>Object Title</FormLabel>
                <select onChange={e => onTypeTitleFieldChange(typeId, e.target.value)}>
                    {
                        typeFields && Object.keys(typeFields).length > 0 &&
                        Object.keys(typeFields).map((fieldId, _) => {
                            const { fieldName } = typeFields[fieldId]
                            return <option value={fieldId} key={fieldId}>{fieldName}</option>
                        })
                    }
                </select>
            </Col>
        )
    }
    const onFieldTypeChange = (fieldType, fieldId) => {
        if (fieldType !== 'REMOVE') {
            onFeildTypeChange(fieldId, fieldType, typeId)
        }
        else if (fieldType === 'REMOVE') {
            onRemoveFieldClick(typeId, fieldId)
        }
    }

    const renderField = () => {
        const typeFields = type?.typeFields;
        if (!typeFields || Object.keys(typeFields).length <= 0) return;
        return (Object.keys(typeFields).map((fieldId, _) => {
            const { fieldName, fieldType } = typeFields[fieldId]
            const fieldTypeName = FIELD_TYPES.filter(item => item.value === fieldType)?.[0]?.name || ''
            return (
                <Row key={fieldId} className="my-2">
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl placeholder='Enter field name' value={fieldName} onChange={e => onFeildNameChange(fieldId, e.target.value, typeId)} />
                            <DropdownButton
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                                title={fieldTypeName}
                                onSelect={(fieldType) => onFieldTypeChange(fieldType, fieldId)}
                            >
                                {
                                    FIELD_TYPES.map((item, _) => {
                                        return <Dropdown.Item eventKey={item.value} key={item.value}>{item.name}</Dropdown.Item>
                                    })
                                }
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey={'REMOVE'}>Remove</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Col>
                </Row>
            )
        }))

    }
    const onFieldAdd = fieldType => {
        onAddFieldClick(fieldType, typeId)
    }
    return (
        <Container>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>{type?.typeName || ''}</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {renderObjectType()}
                            {renderObjectTitleField()}
                        </Row>
                        <Row className='my-2'>
                            <Col>
                                <FormLabel className='my-2'>Fields</FormLabel>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <DropdownButton
                                    variant="outline-primary"
                                    id="input-group-dropdown-2"
                                    align="end"
                                    title={'+ ADD FIELD'}
                                    onSelect={onFieldAdd}
                                >
                                    {
                                        FIELD_TYPES.map((item, _) => {
                                            return <Dropdown.Item eventKey={item.value} key={item.value}>{item.name}</Dropdown.Item>
                                        })
                                    }

                                </DropdownButton>
                            </Col>
                        </Row>
                        {renderField()}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default InventoryTypeForm