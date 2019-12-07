import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Carousel,
    Card
} from 'react-bootstrap'

export default class Cards1 extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }

    render() {
        return (
            <Card
                style={{
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px black',
                    maxHeight: '400px',
                    overflow: 'auto',
                    width: '275px'
                }}
                className="d-block mx-auto"
                key={this.props.user.id}
            >
                <Card.Title className="text-center text-danger">
                    <h2 style={{
                        fontFamily: 'Aladin'
                    }}>
                        {
                            this.props.user.name
                        }
                    </h2>
                </Card.Title>
                <Card.Body className="bg-info">
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Username
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            @
                            {
                                this.props.user.username
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Street
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.address.street
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                City
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.address.city
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                ZIP Code
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.address.zipcode
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Email
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.email
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Phone
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.phone
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Website
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.website
                            }
                        </Carousel.Item>
                    </Carousel>
                    <Carousel
                        indicators={false}
                        interval={0}
                    >
                        <Carousel.Item className="bio">
                            <h5>
                                Company
                            </h5>
                        </Carousel.Item>
                        <Carousel.Item className="description">
                            {
                                this.props.user.company.name
                            }
                        </Carousel.Item>
                    </Carousel>
                </Card.Body>
                <Card.Footer>
                    <Link
                        className="text-success"
                        to={`/users/${this.props.user.id}/pages/1`}
                    >
                        Read More...
                    </Link>
                </Card.Footer>
            </Card >
        )
    }
}
