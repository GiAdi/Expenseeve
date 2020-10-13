import React from 'react';
import '../styles/expenses.css';
import { connect } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap'
import { deleteExpense, editExpense, toggleModal, handlePageClick } from '../redux/actions'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReplayIcon from '@material-ui/icons/Replay';

const Expenses = (props) => {

    let itemsPerPage = 7;
    let active = props.currentPage;
    let expenses = props.expenses;
    let totalRecords = expenses.length;
    console.log(active)

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
        expenseRows.push(
            <tr key={expenses[i].id} id={expenses[i].id} className={expenses[i].deleted === 'true' ? 'deletedRow' : ''}>
                <td className="tableBtn edit" onClick={() => props.toggleModal(expenses[i])}>
                    <EditOutlinedIcon />
                </td>
                <td>{i + 1}</td>
                <td>{expenses[i].name}</td>
                <td>{expenses[i].category}</td>
                <td>{expenses[i].amount}</td>
                <td>{expenses[i].date}</td>
                <td className="tableBtn delete" onClick={() => props.deleteExpense(expenses[i].id)}>
                    {expenses[i].deleted === 'true' ? <ReplayIcon style={{ color: '#3fd36cfa' }} /> : <DeleteOutlineIcon />}
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
        deleteExpense: (id) => dispatch(deleteExpense(id)),
        editExpense: (id) => dispatch(editExpense(id)),
        toggleModal: (el) => dispatch(toggleModal(el)),
        handlePageClick: (number) => dispatch(handlePageClick(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

