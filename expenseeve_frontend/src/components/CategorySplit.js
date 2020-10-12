import React from 'react';
import '../styles/cards.css';
import { CardDeck, Card } from 'react-bootstrap';

const CategorySplit = () => {

    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Category-wise Split</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

export default CategorySplit;
