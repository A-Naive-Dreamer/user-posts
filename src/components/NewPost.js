import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class NewPost extends Component {
    constructor(props) {
        super(props)

        this.props = props

        this.state = {
            title: '',
            body: ''
        }

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
    }

    handleChange3(e) {
        this.setState({
            title: e.target.value
        })
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

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="post-title"
                        value={this.state.title}
                        placeholder="Type new title here..."
                        onChange={e => this.handleChange1(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <textarea
                        cols="30"
                        rows="20"
                        value={this.state.body}
                        name="body"
                        placeholder="Type post content here..."
                        onChange={e => this.handleChange2(e)}
                    ></textarea>
                </Form.Group>
                <Form.Group>
                    <Button
                        type="button"
                        variant="success"
                        block size="lg"
                        onClick={() => this.props.handleAddPost(this.state.title, this.state.body)}
                    >
                        Add New
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
