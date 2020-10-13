import React, { Component } from 'react';

import 'bulma/css/bulma.css';

import { Box, Column, Columns, Container, Subtitle, Title } from 'bloomer';

class IssueList extends Component {
    state = {
        issues: [],
    }

    loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issues = await this.loadData();

        this.setState({
            issues: issues,
        })
    };

    render() {
        const { issues } = this.state;

        return (
            <Columns isCentered>
                <Column isSize='1/2'>
                    <Title isSize={2}>Issue List</Title>
                    {
                        issues.map((issue, index) => (
                            <Container>
                                <Box key={issue.number}>
                                    <Subtitle isSize={4}>{issue.title}</Subtitle>
                                    <a href={issue.url} className="is-link">View Issue Details</a>
                                </Box>
                                <br />
                            </Container>
                        ))
                    }
                </Column>
            </Columns>
        )
    }
}

export default IssueList;