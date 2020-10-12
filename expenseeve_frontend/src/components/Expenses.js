import React from 'react';
import '../styles/expenses.css';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import { deleteExpense, editExpense, toggleModal } from '../redux/actions'
import AddExpense from './AddExpense';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReplayIcon from '@material-ui/icons/Replay';

const Expenses = (props) => {

    let expenseRows = props.expenses.map((el, index) => {
        return (
            <React.Fragment>
                <tr key={el.id} id={el.id} className={el.deleted === 'true' ? 'deletedRow' : ''}>
                    <td className="tableBtn edit" onClick={() => props.toggleModal(el)}>
                        <EditOutlinedIcon />
                    </td>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.category}</td>
                    <td>{el.amount}</td>
                    <td>{el.date}</td>
                    <td className="tableBtn delete" onClick={() => props.deleteExpense(el.id)}>
                        {el.deleted === 'true' ? <ReplayIcon style={{ color: '#3fd36cfa' }} /> : <DeleteOutlineIcon />}
                    </td>
                </tr>
            </React.Fragment>
        )
    })

    return (
        <Table striped size="sm" >
            <thead>
                <tr key='headers'>
                    <th></th>
                    <th>#</th>
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
    );
}

const mapStateToProps = state => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteExpense: (id) => dispatch(deleteExpense(id)),
        editExpense: (id) => dispatch(editExpense(id)),
        toggleModal: (el) => dispatch(toggleModal(el))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

