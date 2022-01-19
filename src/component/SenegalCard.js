import React from 'react'
import {Card,Button} from 'react-bootstrap'

function SenegalCard() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://www.senegal-original.com/app/uploads/sites/22/2018/12/parc-national-niokolo-koba-senegal-klublu.jpeg" />
<Card.Body>
    <Card.Title>Senegal</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go Senegal</Button>
</Card.Body>
</Card>
    )
}

export default SenegalCard
