import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Column, Columns, Container, Subtitle, Title } from 'bloomer';

import IssueDetail from './IssueDetail';

class IssueList extends Component {
    state = {
        issues: [],
    };

    loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issues = await this.loadData();

        this.setState({
            issues,
        });
    }

    render() {
        const { issues } = this.state;

        return (
            <Columns isCentered>
                <Column isSize='3/4'>
                    {!!issues.length ? (
                        <>
                            <Title isSize={2}>Github Issues List</Title>
                            <Route exact path="/">
                                <ul>
                                    {issues.map((issue) => {
                                        return (
                                            <Box key={issue.id}>
                                                {issue.title}
                                                <Link to={`/issue/${issue.number}`}>View Details</Link>
                                            </Box>
                                        );
                                    })}
                                </ul>
                            </Route>
                            <Route path={`/issue/:issue_number`}>
                                <Link to="/">Return to List</Link>
                                <IssueDetail issues={issues} />
                            </Route>
                        </>
                    ) : (
                        <p>Fetching Issues...</p>
                    )}
                </Column>
            </Columns>
        )
    }
}

export default IssueList;