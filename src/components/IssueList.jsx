import React, { Component } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

import 'bulma/css/bulma.css';

import { Box, Column, Columns, Container, Subtitle, Title } from 'bloomer';

import IssueDetail from './IssueDetail';

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
            <>
                <nav>
                    <Columns isCentered>
                        <Column isSize='1/2'>
                            <Title isSize={2}>Issue List</Title>
                            {
                                issues.map((issue, index) => (
                                    <Container>
                                        <Box key={`${issue.number}`}>
                                            <Subtitle isSize={6}>{issue.title}</Subtitle>
                                            <Link to={`/issue/${issue.number}`}  className="link">
                                                View Issue Details
                                            </Link>
                                        </Box>
                                        <br />
                                    </Container>
                                ))
                            }
                        </Column>
                    </Columns>
                </nav>
                <Route path={`/issue/:issue_number`}>
                    <IssueDetail issues={issues} />
                </Route>
            </>
        )
    }
}

export default IssueList;