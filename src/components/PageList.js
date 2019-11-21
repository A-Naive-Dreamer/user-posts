import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

export default class PageList extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }

    render() {
        return (
            <Pagination.Item>
                <PageItem href={`http://localhost:3000/users/1/pages/${}`}>
                    {

                    }
                </PageItem>
            </Pagination.Item>
        )
    }
}
