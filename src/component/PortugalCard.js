import React from 'react'
import {Card,Button} from 'react-bootstrap'

function PortugalCard() {
    return (
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://img-4.linternaute.com/zYZoy5tnWXKUjlwLFX6h0tUiG2g=/1080x/smart/db263c6b134e4ed2b1ffe2a91e79a79c/ccmcms-linternaute/11011317.jpg" />
<Card.Body>
    <Card.Title>Portugal</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go Portugal</Button>
</Card.Body>
</Card>
    )
}

export default PortugalCard
