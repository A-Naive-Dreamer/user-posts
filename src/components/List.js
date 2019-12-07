import React, { Component } from 'react'
import axios from 'axios'
import Cards1 from './Cards1'
import {
    Carousel,
    Jumbotron,
    FormControl
} from 'react-bootstrap'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            users2: [],
            keywords: '',
            name: ''
        }

        this.search = this.search.bind(this)
    }

    search(e) {
        let val = e.target.value

        this.setState({
            keywords: val
        })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    users2: res.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <FormControl
                    name="keywords"
                    type="text"
                    value={this.state.keywords}
                    placeholder="Type keywords here..."
                    onChange={e => this.search(e)}
                />
                <Jumbotron
                    className="bg-dark"
                    style={{
                        height: window.innerHeight + 'px'
                    }}
                >
                    <Carousel indicators={false}>
                        {
                            this.state.users.map((user) => {
                                if (
                                    user.name
                                        .toLowerCase()
                                        .includes(this.state.keywords.toLowerCase())
                                ) {
                                    return (
                                        <Carousel.Item key={user.id}>
                                            <Cards1
                                                user={user}
                                                name={this.state.name}
                                            />
                                        </Carousel.Item>
                                    )
                                }
                            })
                        }
                    </Carousel>
                </Jumbotron>
            </div>
        )
    }
}
