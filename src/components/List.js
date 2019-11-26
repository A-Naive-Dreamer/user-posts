import React, { Component } from 'react'
import axios from 'axios'
import Cards1 from './Cards1'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import FormControl from 'react-bootstrap/FormControl'

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
        let users = this.state.users2,
            newArray = []

        users.forEach(user => {
            if (user.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                newArray.push(user)
            }
        })

        this.setState({
            users: newArray,
            keywords: e.target.value
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

    updateName(id) {
        let newArray = []
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
                <Jumbotron className="bg-dark" style={{
                    height: window.innerHeight + 'px'
                }}>
                    <Carousel indicators={false}>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <Carousel.Item key={user.id}>
                                        <Cards1 user={user} name={this.state.name} />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Jumbotron>
            </div>
        )
    }
}
