import React, { Component } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

import 'bulma/css/bulma.css';

import { Box, Column, Columns, Container, Subtitle, Title } from 'bloomer';

import IssueDetail from './IssueDetail';

const IssueList = props => {
    let issuesList = [];

    const loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        issuesList = data;
        return issuesList;
    }

    console.log("issuesList", issuesList);

    return (
        <>
            <nav>
                <Columns isCentered>
                    <Column isSize='1/2'>
                        <Title isSize={2}>Issue List</Title>
                        {
                            issuesList.map((issue, index) => (
                                <Container>
                                    <Box key={`${issue.number}`}>
                                        <Subtitle isSize={6}>{issue.title}</Subtitle>
                                        <Link to={`${props.match.path}/${issue.number}`}  className="link">
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
            <Route path={`${props.match.path}/:issue_number`}>
                <IssueDetail issues={issuesList} />
            </Route>
        </>
    )
}

export default IssueList;