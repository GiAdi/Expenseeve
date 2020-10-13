import React from 'react';
import '../styles/expenses.css';
import { connect } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap'
import { deleteExpense, toggleModal, handlePageClick } from '../redux/actions'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReplayIcon from '@material-ui/icons/Replay';

const axios = require('axios');

const Expenses = (props) => {

    const deleteExpense = async (id) => {
        await axios.post('http://localhost:4000/softDeleteExpense', {id});
        let response = await axios.get('http://localhost:4000/getExpenses');
        props.deleteExpense(response.data);
    }

    let itemsPerPage = 7;
    let active = props.currentPage;
    let expenses = props.expenses;
    let totalRecords = expenses.length;

    // FOR PAGINATION
    let totalPages = Math.ceil(totalRecords / itemsPerPage);
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>props.handlePageClick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    // FOR CURRENT PAGE
    let start = ((active-1)*itemsPerPage);
    let end = start + itemsPerPage;
    let expenseRows = [];
    for (let i = start; i<end && i<totalRecords; i++) {
        let date = expenses[i].date;
        let dateString = ``;
        dateString += date.slice(8,10) + '-';
        dateString += date.slice(5,7) + '-';
        dateString += date.slice(0,4);
        expenseRows.push(
            <tr key={expenses[i].id} id={expenses[i].id} className={expenses[i].deleted === 'true' ? 'deletedRow' : ''}>
                <td className="tableBtn edit" onClick={() => props.toggleModal(expenses[i])}>
                    <EditOutlinedIcon />
                </td>
                <td>{i + 1}</td>
                <td>{expenses[i].name}</td>
                <td>{expenses[i].category}</td>
                <td>{expenses[i].amount}</td>
                <td>{dateString}</td>
                <td className="tableBtn delete" onClick={() => deleteExpense(expenses[i].id)}>
                    {expenses[i].deleted === 'true' ? <ReplayIcon style={{ color: '#28a745' }} /> : <DeleteOutlineIcon />}
                </td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <Table striped size="sm" >
                <thead>
                    <tr key='headers'>
                        <th></th>
                        <th>Serial</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Expense Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenseRows}
                </tbody>
            </Table>
            <Pagination size="sm">{items}</Pagination>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        expenses: state.expenses,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteExpense: (data) => dispatch(deleteExpense(data)),
        toggleModal: (el) => dispatch(toggleModal(el)),
        handlePageClick: (number) => dispatch(handlePageClick(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

