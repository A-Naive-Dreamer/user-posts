import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Cards2 from './Cards2'
import NewPost from './NewPost'
import Desert from '../assets/images/desert.jpg'
import {
    Form,
    Col,
    Row
} from 'react-bootstrap'

class Users extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            posts: [],
            posts2: [],
            keywords: '',
            index: 0,
            userId: 0,
            title: '',
            body: ''
        }

        this.handleEditTitle = this.handleEditTitle.bind(this)
        this.handleEditBody = this.handleEditBody.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)
        this.handleAddPost = this.handleAddPost.bind(this)
        this.searchForTitle = this.searchForTitle.bind(this)
        this.searchForTitle2 = this.searchForTitle2.bind(this)
        this.handleAddTitle = this.handleAddTitle.bind(this)
        this.handleAddBody = this.handleAddBody.bind(this)
    }

    handleAddTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleAddBody(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleAddPost(title, body) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/`

        if (!window.confirm('Are you want to add the post?')) return

        axios.post(path)
            .then(response => {
                let newPosts = this.state.posts2,
                    index = this.state.index

                ++index

                newPosts.push({
                    id: index,
                    userId: this.state.userId,
                    title: title,
                    body: body
                })

                this.setState({
                    index: index,
                    posts2: newPosts
                })
                this.searchForTitle2('')
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleDeletePost(index) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`

        if (!window.confirm('Are you want to delete the post?')) return

        axios.delete(path)
            .then(response => {
                let newPosts = this.state.posts2

                this.state.posts2.forEach((post, idx) => {
                    if (parseInt(post.id) === index) {
                        newPosts.splice(idx, 1)
                    }
                })

                this.setState({
                    posts2: newPosts
                })
                this.searchForTitle2(this.state.keywords)
            })
            .catch(error => {
                console.log(error)
            })
    }

    searchForTitle2(keywords) {
        let newPosts = [],
            val = keywords

        this.state.posts2.forEach(post => {
            if (!post.title.includes(val)) return null

            newPosts.push(post)
        })

        this.setState({
            posts: newPosts
        })
    }

    searchForTitle(e) {
        let newPosts = [],
            val = e.target.value

        this.state.posts2.forEach(post => {
            if (!post.title.includes(val)) return null

            newPosts.push(post)
        })

        this.setState({
            keywords: val,
            posts: newPosts
        })
    }

    handleEditTitle(index, title) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`

        if (!window.confirm('Are you want to edit title of the post?')) return

        axios.put(path)
            .then(response => {
                let newPosts = this.state.posts2

                this.state.posts2.forEach((post, idx) => {
                    if (parseInt(post.id) === index) {
                        newPosts[idx].title = title
                    }
                })

                this.setState({
                    posts2: newPosts
                })
                this.searchForTitle2(this.state.keywords)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleEditBody(index, body) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`

        if (!window.confirm('Are you want to edit body of the post?')) return

        axios.put(path)
            .then(response => {
                let newPosts = this.state.posts2

                this.state.posts2.forEach((post, idx) => {
                    if (parseInt(post.id) === index) {
                        newPosts[idx].body = body
                    }
                })

                this.setState({
                    posts2: newPosts
                })
                this.searchForTitle2(this.state.keywords)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        const {
            match: {
                params: {
                    ID
                }
            }
        } = this.props,
            path = `${process.env.REACT_APP_API_PLACEHOLDER}/users/${ID}/posts`

        this.setState({
            userId: this.props.match.params.id
        })

        axios.get(path)
            .then((res) => {
                this.setState({
                    posts: res.data,
                })

                this.setState({
                    index: this.state.posts[this.state.posts.length - 1].id,
                    posts2: this.state.posts
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Row
                noGutters={false}
                style={{
                    margin: '0 auto',
                    width: '95%'
                }}
            >
                <Col
                    md={{
                        span: 4,
                        order: 1
                    }}
                    style={{
                        height: window.innerHeight + 'px',
                        overflow: 'auto'
                    }}
                >
                    <NewPost handleAddPost={this.handleAddPost} />
                </Col>
                <Col
                    md={{
                        span: 8,
                        order: 2
                    }}
                    style={{
                        backgroundImage: `url(${Desert})`,
                        backgroundPosition: 'center',
                        height: window.innerHeight + 'px',
                        overflow: 'scroll'
                    }}
                >
                    <div>
                        <Form style={{
                            marginTop: '25px'
                        }}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Search for title..."
                                    value={this.state.keywords}
                                    onChange={e => this.searchForTitle(e)} />
                            </Form.Group>
                        </Form>
                    </div>
                    <div
                        className="d-flex justify-content-between"
                        style={{
                            flexWrap: 'wrap',
                            overflow: 'scroll'
                        }}
                    >
                        {
                            this.state.posts.map((post) => {
                                if (parseInt(post.userId) !== parseInt(this.state.userId)) {
                                    return null
                                }

                                return (
                                    <Cards2
                                        key={post.id}
                                        post={post}
                                        idx={post.id}
                                        handleEditBody={this.handleEditBody}
                                        handleEditTitle={this.handleEditTitle}
                                        handleDeletePost={this.handleDeletePost}
                                        handleAddPost={this.handleAddPost}
                                    />
                                )
                            })
                        }
                    </div>
                </Col>
            </Row >
        )
    }
}

export default withRouter(Users)
