import React from 'react'
import {Card ,Button} from 'react-bootstrap'

function ItalyCard() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://sakenticoprod.blob.core.windows.net/media/media/articles/a%20road%20trip%20to%20the%20italian%20lakes/italy-lakes-road-trip-1.jpg" />
<Card.Body>
    <Card.Title>Italy</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go Italy</Button>
</Card.Body>
</Card>
    )
}

export default ItalyCard
