import React from 'react';
import '../styles/cards.css';
import { CardDeck, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import Chart from "react-apexcharts";


const CategorySplit = (props) => {
    
    const expenses = props.expenses;
    const categories = props.categories;
    
    const options = {
        chart: { id: "basic-bar" },
        xaxis: { categories: ['Categories']  }
    };
    
    let series = [];
    let categoryObj = {};

    categories.forEach(_ => categoryObj[_] = 0);

    expenses.forEach( expense => categoryObj[expense.category] += expense.amount );

    Object.entries(categoryObj).forEach( entry => series.push( { name: entry[0], data: [entry[1]] } ) );

    return (
        <CardDeck>
            <Card>
                <Card.Body style={{padding:'2px 0px 0px 0px'}}>
                    <b><center>Category-wise Split</center></b>
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height="220"
                    />
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategorySplit);
