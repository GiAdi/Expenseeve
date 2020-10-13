import React from 'react';
import '../styles/cards.css';
import { CardDeck, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Progress } from 'antd';


const BudgetOverview = (props) => {

    let totalexpenses = 0;
    props.expenses.forEach(expense => {
        if (expense.amount && expense.deleted==='false')
            totalexpenses += expense.amount;
    });
    let percentage =  Math.floor(totalexpenses * 100 / props.budget)

    return (
        <CardDeck>
            <Card>
                <Card.Body style={{padding:'5px 30px 20px 40px'}}> 
                    <b><center>Budget Overview</center></b>
                    <hr/>
                    <br/>
                    <Row>
                        <Col>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#55ea4e',
                                    '100%': 'red',
                                }}
                                percent={percentage}
                                format={percent => `${percentage}% Spent`}
                            />
                        </Col>
                        <Col>
                            <Card.Text style={{ float: 'right' }}>
                                <b>Total Budget:</b> <br/>Rs. {props.budget}
                                <br />
                                <br />
                                <b>Total Expenses:</b> <br/>Rs. {totalexpenses}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

const mapStateToProps = state => {
    return { expenses: state.expenses, budget: state.budget }
}
const mapDispatchToProps = dispatch => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(BudgetOverview);
// export default connect(mapStateToProps)(BudgetOverview);
