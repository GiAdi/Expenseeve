import React from 'react';
import '../styles/cards.css';
import { CardDeck, Card } from 'react-bootstrap';

const BudgetOverview = () => {

    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Budget Overview</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </CardDeck>
    )
}

export default BudgetOverview;
