import React from 'react'
import {Card,Button} from 'react-bootstrap'

function NetherlandCard() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://previews.123rf.com/images/marina99/marina991609/marina99160900001/63950403-bicycle-parked-on-a-bridge-in-amsterdam-at-night-netherlands.jpg" />
<Card.Body>
    <Card.Title>Netherland</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go Netherland</Button>
</Card.Body>
</Card>
    )
}

export default NetherlandCard
