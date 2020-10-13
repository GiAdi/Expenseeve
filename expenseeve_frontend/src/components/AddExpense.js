import React from 'react';
import '../styles/addExpense.css';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import { addExpense, handleChange } from '../redux/actions'
import { connect } from 'react-redux';

const axios = require('axios');

const AddExpense = (props) => {

    const addExpense = async () => {
        await axios.post('http://localhost:4000/addExpense', props.modalValues);
        let response = await axios.get('http://localhost:4000/getExpenses');
        props.addExpense(response.data);
    }

    let categories = [...props.categories];
    let categoryOptions = categories.map( (el, index) => <option key={index}>{el}</option>)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Expense Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onChange={(event) => props.handleChange(event.target)}>
                    <Form.Row>
                        <Col xs={9}>
                            <Form.Control name="name" placeholder="Item Name" value={props.modalValues ? props.modalValues.name : ''} />
                        </Col>
                        <Col xs={3}>
                            <Form.Control name="category" placeholder="Category" as="select" value={props.modalValues ? props.modalValues.category : ''}>
                                <option>Select Category</option>
                                {categoryOptions}
                            </Form.Control>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>₹</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control name="amount" placeholder="Amount" type="number" value={props.modalValues ? props.modalValues.amount : ''} />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Control name="date" placeholder="Expense Date" type="date" value={props.modalValues ? props.modalValues.date : ''} />
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
                <Button variant="success" onClick={addExpense}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

const mapStateToProps = state => {
    return { modalValues: state.modalValues, categories: state.categories }
}

const mapDispatchToProps = dispatch => {
    return {
        addExpense: (data) => dispatch(addExpense(data)),
        handleChange: (change) => dispatch(handleChange(change))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
