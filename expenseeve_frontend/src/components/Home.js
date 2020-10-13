import React from 'react';
import '../styles/home.css';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actions';
import { Row, Col, Button } from 'react-bootstrap';
import BudgetOverview from './BudgetOverview';
import CategorySplit from './CategorySplit';
import AddExpense from './AddExpense';
import Expenses from './Expenses';

const Home = (props) => {

  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <BudgetOverview />
        </Col>
        <Col md={6}>
          <CategorySplit />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button variant="outline-primary" size="lg" onClick={props.toggleModal}>Add Expense</Button>
        </Col>
      </Row>
      <Row>
        <Expenses/>
      </Row>
      <AddExpense
        show = {props.isModalOpen}
        onHide = {props.toggleModal}
        />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
