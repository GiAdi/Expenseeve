import React from 'react';
import '../styles/addExpense.css';
import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';

const AddExpense = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Expense Details
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col xs={9}>
                            <Form.Control placeholder="Item Name" />
                        </Col>
                        <Col xs={3}>
                            <Form.Control placeholder="Category" as="select">
                                <option value={0}>Select Category</option>
                                <option>Groceries</option>
                                <option>Commuting</option>
                                <option>Bills</option>
                                <option>Leisure</option>
                                <option>Others</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>₹</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control placeholder="Amount" type="number" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Expense Date" type="date" />
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddExpense;
