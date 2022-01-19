import React from 'react'
import {Carousel} from 'react-bootstrap'

function SlideShow() {
    return (
        <Carousel fade>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://sakenticoprod.blob.core.windows.net/media/media/articles/a%20road%20trip%20to%20the%20italian%20lakes/italy-lakes-road-trip-1.jpg"
    alt="First slide"
    />
    <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://i.ytimg.com/vi/OtJVufo3IrA/sddefault.jpg"
    alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://d1e00ek4ebabms.cloudfront.net/production/dae67140-14d6-4a1b-8b88-1092b72df964.jpg"
    alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
</Carousel.Item>
</Carousel>
    )
}

export default SlideShow
