import React from 'react'
import { Row, Col, DropdownButton, Dropdown, Container } from 'react-bootstrap'
import InventoryForm from './InventoryForm'

const Inventory = ({
    types,
    onAddInventory,
    onAddInventoryFieldValue,
    onRemoveInventory,
    inventoryList,
    typeId
}) => {
    const renderAddButton = () => {
        if (!types || Object.keys(types).length <= 0) return
        return (
            <Row className='d-flex align-self-end my-1'>
                <Col>
                    <DropdownButton
                        variant="outline-primary"
                        id="input-group-dropdown-2"
                        align="end"
                        title={'+ ADD INVENTORY'}
                        onSelect={onAddInventory}
                    >
                        {
                            Object.keys(types).map((typeId, _) => {
                                return <Dropdown.Item eventKey={typeId} key={typeId}>{types?.[typeId]?.typeName || ''}</Dropdown.Item>
                            })
                        }
                    </DropdownButton>
                </Col>
            </Row>
        )
    }

    const renderInventories = (typeId, inventoryId) => {
        return (
            <InventoryForm
                types={types}
                typeId={typeId}
                inventoryItem={inventoryList[typeId][inventoryId]}
                inventoryId={inventoryId}
                onAddInventoryFieldValue={onAddInventoryFieldValue}
                onRemoveInventory={onRemoveInventory}
            />
        )
    }

    const renderAllInventories = () => {
        return (
            inventoryList && Object.keys(inventoryList).length > 0 &&
            Object.keys(inventoryList).map((typeId, _) => {
                return inventoryList?.[typeId] && Object.keys(inventoryList[typeId]).length > 0 &&
                    Object.keys(inventoryList[typeId]).map((inventoryId, _) => {
                        return renderInventories(typeId, inventoryId)
                    })

            })
        )
    }

    const renderSpecificInventory = () => {
        return (
            inventoryList && inventoryList?.[typeId] && Object.keys(inventoryList?.[typeId]).length > 0 &&
            Object.keys(inventoryList?.[typeId]).map((inventoryId, _) => {
                return renderInventories(typeId, inventoryId)
            })
        )
    }
    return (
        <Container className="d-flex flex-column">
            {renderAddButton()}
            {!typeId && renderAllInventories()}
            {typeId && renderSpecificInventory()}

        </Container>
    )
}
export default Inventory;