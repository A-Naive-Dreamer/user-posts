import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Cards2 from './Cards2'
import Pagination from 'react-bootstrap/Pagination'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NewPost from './NewPost'
import Desert from '../assets/images/desert.jpg'

class Users extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            posts: [],
            index: 0,
            userId: 0
        }

        this.handleEditTitle = this.handleEditTitle.bind(this)
        this.handleEditBody = this.handleEditBody.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)
        this.handleAddPost = this.handleAddPost.bind(this)
    }

    handleAddPost(title, body) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/`

        if (!window.confirm('Are you want to add the post?')) return

        axios.post(path)
            .then(response => {
                let newPosts = this.state.posts,
                    index = this.state.index

                ++index

                newPosts.push({
                    id: index,
                    title: title,
                    body: body
                })

                this.setState({
                    index: index,
                    posts: newPosts
                })

                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleDeletePost(index) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`

        if (!window.confirm('Are you want to delete the post?')) return

        console.log(this.state.userId)
        axios.delete(path)
            .then(response => {
                let newPosts = this.state.posts

                newPosts.splice(index, 1)

                this.setState({
                    posts: newPosts
                })

                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleEditTitle(index, title) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`
        console.log(path)

        if (!window.confirm('Are you want to edit title of the post?')) return

        axios.put(path)
            .then(response => {
                let newPosts = this.state.posts

                newPosts[index].title = title

                this.setState({
                    posts: newPosts
                })

                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleEditBody(index, body) {
        let path = `${process.env.REACT_APP_API_PLACEHOLDER}/posts/${index + 1}`
        console.log(path)

        if (!window.confirm('Are you want to edit body of the post?')) return

        axios.put(path)
            .then(response => {
                let newPosts = this.state.posts

                newPosts[index].body = body

                this.setState({
                    posts: newPosts
                })

                console.log(response)
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
                    index: this.state.posts.length
                })

                console.log(res)

                // let newPosts = [],
                //     x = 0,
                //     y = 4

                // while (this.state.posts.length > x) {
                //     if ((this.state.posts.length - x) >= 4) {
                //         newPosts.push(this.state.posts.slice(x, y))
                //     } else {
                //         newPosts.push(this.state.posts.slice(x, x + (this.state.posts.length - x)))
                //     }

                //     x += 4
                //     y += 4
                // }

                // console.log(newPosts)

                // this.setState({
                //     posts: newPosts[0]
                // })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        return (
            <Row noGutters={false}>
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
                    <div
                        className="d-flex justify-content-between"
                        style={{
                            flexWrap: 'wrap',
                            overflow: 'scroll'
                        }}
                    >
                        {
                            this.state.posts.map((post, index) => {
                                return (
                                    <Cards2
                                        key={post.id}
                                        post={post}
                                        idx={index}
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
            </Row>
        )
    }
}

export default withRouter(Users)