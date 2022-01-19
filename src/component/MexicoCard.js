import React from 'react'
import {Card,Button} from 'react-bootstrap'

function MexicoCard() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://www.jysk-rejsebureau.dk/medias/2020-03/mexico_239507_1132x637px.jpg" />
<Card.Body>
    <Card.Title>Mexico</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go Mexico</Button>
</Card.Body>
</Card>
    )
}

export default MexicoCard
