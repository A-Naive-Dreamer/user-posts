import React, { Component } from 'react'
import axios from 'axios'
import Cards1 from './Cards1'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Jumbotron className="bg-dark" style={{
                height: window.innerHeight + 'px'
            }}>
                <Carousel indicators={false}>
                    {
                        this.state.users.map((user) => {
                            return (
                                <Carousel.Item key={user.id}>
                                    <Cards1 user={user} />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Jumbotron>
        )
    }
}
