import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, InputGroup, Form, ListGroup } from 'react-bootstrap';
import ClearIcon from '@material-ui/icons/Clear';
import { deleteCategory, addCategory, updateBudget } from '../redux/actions'
const axios = require('axios')
// import '../styles/settings.css';

const Settings = (props) => {

  const deleteCategory = async (category) => {
    await axios.post('http://localhost:4000/deleteCategory', {category});
    const response = await axios.get('http://localhost:4000/getSettings');
    console.log(response.data[0].categories)
    props.deleteCategory(response.data[0].categories);
  }
  const addCategory = async (category) => {
    await axios.post('http://localhost:4000/addCategory', {category});
    const response = await axios.get('http://localhost:4000/getSettings');
    console.log(response.data[0].categories)
    props.addCategory(response.data[0].categories);
  }
  const updateBudget = async (budget) => {
    await axios.post('http://localhost:4000/updateBudget', {budget});
    const response = await axios.get('http://localhost:4000/getSettings');
    console.log(response.data[0].budget)
    props.updateBudget(response.data[0].budget);
  }

  let categories = [...props.categories];
  let listItems = categories.map( (el, index) => 
    <ListGroup.Item key={index}>
      {el}
      <ClearIcon style={{ float: 'right', color: 'red', fontSize: 'large', cursor: 'pointer' }} onClick={() => deleteCategory(el)}/>
    </ListGroup.Item>
  )

  return (
    <React.Fragment>
      <Form >
        <Form.Group as={Row}>
          <Form.Label style={{ textAlign: 'center' }} column sm={3}>
            Total Budget 
            <br/>
            (Current Rs. {props.budget})
          </Form.Label>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>₹</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control id='budget' placeholder="Enter your total monthly budget" type="number" />
            </InputGroup>
          </Col>
          <Col sm={2}>
            <Button 
              style={{ float: 'right', width: '70%' }} 
              variant="outline-primary"
              onClick={() => {
                let element = document.getElementById("budget");
                let value = element.value;
                element.value = ''
                updateBudget(value);
              }}>
                Update
            </Button>
          </Col>
        </Form.Group>
        <hr/><br/><br/>
        <Form.Group as={Row}>
          <Form.Label style={{ textAlign: 'center' }} column sm={3}>
            Categories
          </Form.Label>
          <Col sm={6}>
            <InputGroup>
              <Form.Control id='category' placeholder="Enter new Category" type="input" />
            </InputGroup>
          </Col>
          <Col sm={2}>
            <Button 
              style={{ float: 'right', width: '70%' }} 
              variant="outline-primary" 
              onClick={() => {
                let element = document.getElementById("category");
                let value = element.value;
                element.value = ''
                addCategory(value);
                }}>
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
        <ListGroup variant="flush">
          {listItems}
        </ListGroup>
      </Col>
      <Col sm={2}></Col>
      </Row>
    </React.Fragment>

  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    budget: state.budget
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: (categories) => dispatch(deleteCategory(categories)),
    addCategory: (categories) => dispatch(addCategory(categories)),
    updateBudget: (budget) => dispatch(updateBudget(budget))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

