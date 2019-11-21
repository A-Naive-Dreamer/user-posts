import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Cards2 extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            isVisible1: true,
            isVisible2: true,
            title: this.props.post.title,
            body: this.props.post.body
        }

        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
    }

    handleChange1(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleChange2(e) {
        this.setState({
            body: e.target.value
        })
    }

    handleClick1() {
        this.setState({
            isVisible1: !this.state.isVisible1
        })
    }

    handleClick2() {
        this.setState({
            isVisible2: !this.state.isVisible2
        })
    }

    render() {
        return (
            <Card
                style={{
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px black',
                    margin: '25px',
                    maxHeight: '400px',
                    overflow: 'auto',
                    width: '300px'
                }}
                key={
                    this.props.post.id
                }
            >
                <Button
                    type="button"
                    variant="danger"
                    block
                    onClick={() => this.props.handleDeletePost(this.props.idx)}
                >
                    &times;
                </Button>
                <Card.Title
                    className="text-center text-primary"
                    style={{
                        display: (this.state.isVisible1 ? 'block' : 'none')
                    }}
                    onClick={this.handleClick1}
                >
                    {
                        this.props.post.title
                    }
                </Card.Title>
                <Form
                    style={{
                        display: (this.state.isVisible1 ? 'none' : 'block')
                    }}
                >
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="post-title"
                            placeholder="Please, type new title..."
                            value={this.state.title}
                            onChange={e => this.handleChange1(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button
                            block
                            variant='outline-danger'
                            type="button"
                            onClick={() => this.props.handleEditTitle(this.props.idx, this.state.title)}
                        >
                            Edit
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Button
                            block
                            variant='outline-danger'
                            type="button"
                            onClick={this.handleClick1}
                        >
                            esc
                        </Button>
                    </Form.Group>
                </Form>
                <Card.Body className="bg-info">
                    <Card.Text
                        style={{
                            display: (this.state.isVisible2 ? 'block' : 'none')
                        }}
                        onClick={
                            this.handleClick2
                        }
                    >
                        {
                            this.props.post.body
                        }
                    </Card.Text>
                    <Form
                        style={{
                            display: (this.state.isVisible2 ? 'none' : 'block')
                        }}
                    >
                        <Form.Group>
                            <textarea
                                cols="17"
                                rows="7"
                                onChange={e => this.handleChange2(e)}
                                placeholder="Type your post in here..."
                                value={this.state.body}
                            ></textarea>
                        </Form.Group>
                        <Form.Group>
                            <Button
                                block
                                variant='outline-danger'
                                type="button"
                                onClick={e => {
                                    this.props.handleEditBody(this.props.idx, this.state.body)
                                }}
                            >
                                Edit
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <Button
                                block
                                variant='outline-danger'
                                type="button"
                                onClick={
                                    this.handleClick2
                                }
                            >
                                esc
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card >
        )
    }
}
